"""Make pywasmcross add the Python include to preprocess-only calls.

Edits the installed pyodide-build in place, or the file given as the
first argument.
"""

import pathlib
import sys

OLD = '''        if build_args.pythoninclude:
            new_args.extend(["-I", build_args.pythoninclude])

    return new_args
'''
NEW = '''        if build_args.pythoninclude:
            new_args.extend(["-I", build_args.pythoninclude])
    elif "-E" in line and build_args.pythoninclude:
        new_args.extend(["-I", build_args.pythoninclude])

    return new_args
'''

if len(sys.argv) > 1:
    path = pathlib.Path(sys.argv[1])
else:
    import pyodide_build.pywasmcross

    path = pathlib.Path(pyodide_build.pywasmcross.__file__)

source = path.read_text()
if source.count(OLD) != 1:
    sys.exit(f"Could not find the block to patch in {path}")
path.write_text(source.replace(OLD, NEW))
print(f"Patched {path}")
