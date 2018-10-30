from flask import Flask, request
import sys
import json

from matrixParser import MatrixParser
from pathFinder import PathFinder

app = Flask(__name__)


@app.route("/longest-path", methods=["POST"])
def getLongestPath():
    try:
        Parser = MatrixParser()
        matrix = Parser.getFileMatrix(request.form["file"])
        Finder = PathFinder(matrix["rows"], matrix["columns"], matrix["content"])
        path = Finder.getLongestDescendentPath()
        return json.dumps({"ok": True, "result": path}, ensure_ascii=False)
    except:
        return json.dumps(
            {"ok": False, "error": str(sys.exc_info()[1])}, ensure_ascii=False
        )

