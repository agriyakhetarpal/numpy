#!/bin/bash
# Prints what the Pyodide cross-build environment offers to pkg-config
# before meson runs. DEBUG_VARIANT selects optional changes to it.

echo "PYODIDE_ROOT=${PYODIDE_ROOT}"
env | grep -E '^(PKG_CONFIG|CFLAGS|CPPFLAGS|LDFLAGS|_PYTHON|PYODIDE)' | sort
python -c "from importlib.metadata import version; print('pyodide-build', version('pyodide-build'))"

python_install=$(ls -d "${PYODIDE_ROOT}"/cpython/installs/python-3.* | head -n 1)
pyver=$(basename "${python_install}" | sed -E 's/^python-([0-9]+\.[0-9]+).*/\1/')
libpc="${python_install}/lib/pkgconfig"
sysconfigdata=$(ls "${python_install}"/sysconfigdata/_sysconfigdata_*.py | head -n 1)

echo "Python install in the xbuildenv: ${python_install}"
ls -la "${python_install}"
echo "pkg-config files in the xbuildenv:"
find "${PYODIDE_ROOT}" -name '*.pc'

if [[ "${DEBUG_VARIANT}" == *no-libpc* ]]; then
    printf '\nbuild_time_vars.pop("LIBPC", None)\n' >> "${sysconfigdata}"
    echo "Dropped LIBPC from ${sysconfigdata}"
fi

if [[ "${DEBUG_VARIANT}" == *xbuildenv-pc* ]]; then
    mkdir -p "${libpc}"
    cat > "${libpc}/python-${pyver}.pc" << EOF
prefix=\${pcfiledir}/../..
includedir=\${prefix}/include

Name: Python
Description: Build a C extension for Python
Version: ${pyver}
Cflags: -I\${includedir}/python${pyver}
EOF
    echo "Wrote ${libpc}/python-${pyver}.pc:"
    cat "${libpc}/python-${pyver}.pc"
fi

if [[ "${DEBUG_VARIANT}" == *pywasmcross-E* ]]; then
    python "$(dirname "$0")/debug_patch_pywasmcross.py"
fi

echo "pkg-config with the search path of this environment:"
pkg-config --cflags "python-${pyver}"
echo "exit code: $?"

echo "pkg-config with LIBPC added through PKG_CONFIG_PATH, as meson does:"
PKG_CONFIG_PATH="${libpc}" pkg-config --cflags "python-${pyver}"
echo "exit code: $?"

echo "pkg-config restricted to LIBPC through PKG_CONFIG_LIBDIR:"
PKG_CONFIG_LIBDIR="${libpc}" pkg-config --cflags "python-${pyver}"
echo "exit code: $?"

exit 0
