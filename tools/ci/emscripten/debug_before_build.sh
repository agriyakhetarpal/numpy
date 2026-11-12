#!/bin/bash
# Prints what the Pyodide cross-build environment offers to pkg-config
# before meson runs. DEBUG_VARIANT selects an optional change to it.

echo "PYODIDE_ROOT=${PYODIDE_ROOT}"
env | grep -E '^(PKG_CONFIG|CFLAGS|CPPFLAGS|LDFLAGS|_PYTHON|PYODIDE)' | sort

python_install=$(ls -d "${PYODIDE_ROOT}"/cpython/installs/python-3.14.* | head -n 1)
libpc="${python_install}/lib/pkgconfig"

echo "Python install in the xbuildenv: ${python_install}"
ls -la "${python_install}"
echo "pkg-config files in the xbuildenv:"
find "${PYODIDE_ROOT}" -name '*.pc'

if [ "${DEBUG_VARIANT}" = "xbuildenv-pc" ]; then
    mkdir -p "${libpc}"
    cat > "${libpc}/python-3.14.pc" << EOF
prefix=${python_install}
includedir=\${prefix}/include

Name: Python
Description: Build a C extension for Python
Version: 3.14
Cflags: -I\${includedir}/python3.14
EOF
    echo "Wrote ${libpc}/python-3.14.pc:"
    cat "${libpc}/python-3.14.pc"
fi

echo "pkg-config with the search path of this environment:"
pkg-config --cflags python-3.14
echo "exit code: $?"

echo "pkg-config with LIBPC added through PKG_CONFIG_PATH, as meson does:"
PKG_CONFIG_PATH="${libpc}" pkg-config --cflags python-3.14
echo "exit code: $?"

echo "pkg-config restricted to LIBPC through PKG_CONFIG_LIBDIR:"
PKG_CONFIG_LIBDIR="${libpc}" pkg-config --cflags python-3.14
echo "exit code: $?"

exit 0
