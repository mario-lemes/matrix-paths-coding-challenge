import sys
import os
import json


from matrixParser import MatrixParser
from pathFinder import PathFinder

"""
Python service to find the longest (and then steepest) path
on the specified map given on a text file.

@param {String} File name

@returns {Object}
"""
args = sys.argv[1:]

try:
    if args:
        if os.path.exists(args[0]):
            # Intantiate a new Parser
            Parser = MatrixParser()

            # Parse the matrix from the file given
            matrix = Parser.getFileMatrix(args[0])

            # Intantiate a new Path Finder
            Finder = PathFinder(matrix["rows"], matrix["columns"], matrix["content"])

            # Get the longest (and  steepest path)
            path = Finder.getLongestDescendentPath()

            print(json.dumps({"ok": True, "result": path}, ensure_ascii=False))
        else:
            raise FileNotFoundError(f"File {args[0]} does not exist")
    else:
        raise Exception("File is required")
except:
    print(
        json.dumps({"ok": False, "error": str(sys.exc_info()[1])}, ensure_ascii=False)
    )

