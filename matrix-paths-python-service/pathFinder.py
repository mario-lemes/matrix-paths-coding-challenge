"""
Class to calculate possible path on a matrix of integers based on
its cardinals neighbors values

"""


class PathFinder:
    def __init__(self, rows, columns, matrix):
        self.rows = rows
        self.columns = columns
        self.matrix = matrix
        self.cardinalPointsValuesMatrix = [
            [None for x in range(columns)] for y in range(rows)
        ]

    """
    __getCardinalPointsDifferenceFrom(): function util to calculate the difference between
    the given point with all its neighbors

    @params {Integer} row          Coordinate X of the point
    @params {Integer} column       Coordinate Y of the point

    @returns {
                north: {value: Integer, diff: Integer},
                east: {value: Integer, diff: Integer},
                south: {value: Integer, diff: Integer},
                west: {value: Integer, diff: Integer}
              }
    """

    def __getCardinalPointsDifferenceFrom(self, row, column):
        cardinalsPoints = []

        # Calculate difference of the north neighbor
        if row - 1 >= 0:
            cardinalsPoints.append(
                {
                    "value": self.matrix[row - 1][column],
                    "diff": self.matrix[row][column] - self.matrix[row - 1][column],
                    "row": row - 1,
                    "column": column,
                }
            )

        # Calculate difference of the east neighbor
        if column + 1 < self.columns:
            cardinalsPoints.append(
                {
                    "value": self.matrix[row][column + 1],
                    "diff": self.matrix[row][column] - self.matrix[row][column + 1],
                    "row": row,
                    "column": column + 1,
                }
            )

        # Calculate difference of the south neighbor
        if row + 1 < self.rows:
            cardinalsPoints.append(
                {
                    "value": self.matrix[row + 1][column],
                    "diff": self.matrix[row][column] - self.matrix[row + 1][column],
                    "row": row + 1,
                    "column": column,
                }
            )

        # Calculate difference of the west neighbor
        if column - 1 >= 0:
            cardinalsPoints.append(
                {
                    "value": self.matrix[row][column - 1],
                    "diff": self.matrix[row][column] - self.matrix[row][column - 1],
                    "row": row,
                    "column": column - 1,
                }
            )

        return cardinalsPoints

    """
    getLongestDescendentPath(): method to get the longest descendent path

    @params {Boolean} steepest    Flag to indicate if the logest path should be
                                  also the steepest one

    @return
    """

    def getLongestDescendentPath(self, seteepest=True):
        subPaths = []
        bestPath = None
        for row in range(self.rows):
            for column in range(self.columns):
                # Get all the possible descendent paths and
                # sub-paths for each starting point [row,column]
                path = self.__discoverDescendentPaths(row, column, 0)

                for auxPath in self.__getSubPaths(path):
                    subPaths += auxPath
                    if (
                        bestPath == None
                        or bestPath["pathLength"] < auxPath["pathLength"]
                    ):
                        bestPath = auxPath
                    elif (
                        bestPath["pathLength"] == auxPath["pathLength"]
                        and bestPath["steepLength"] < auxPath["steepLength"]
                    ):
                        bestPath = auxPath

        return bestPath

    """
    __discoverDescendentPaths(): util function to discover all the descendent paths
    recursively

    @param {Integer} row
    @param {Integer} column

    @return {Object[]}
    """

    def __discoverDescendentPaths(self, row, column, depthLevel):
        possiblePaths = []

        # If cardinal matrix values for [row,column] don't exist
        # let's calculate them
        if self.cardinalPointsValuesMatrix[row][column] == None:
            self.cardinalPointsValuesMatrix[row][
                column
            ] = self.__getCardinalPointsDifferenceFrom(row, column)

        # Remove cardinal values that are not lower than the matrix
        # value in [row,column]
        descendentValues = list(
            filter(
                lambda x: x["diff"] > 0, self.cardinalPointsValuesMatrix[row][column]
            )
        )

        # Jump to the rest cardinal values and iterate again in order to
        # discover the full path
        if len(descendentValues) > 0:
            for descendentValue in descendentValues:
                possiblePaths += [
                    {
                        "value": self.matrix[row][column],
                        "row": row,
                        "column": column,
                        "depthLevel": depthLevel,
                    }
                ] + self.__discoverDescendentPaths(
                    descendentValue["row"], descendentValue["column"], depthLevel + 1
                )
        else:
            # If there is no more valid cardinal values we are in an ending point
            return [
                {
                    "value": self.matrix[row][column],
                    "row": row,
                    "column": column,
                    "depthLevel": depthLevel,
                }
            ]

        return possiblePaths

    """
    __getSubPaths(): util function to get sub-path arrays

    @param {Object[]}   All points in the matrix which build all paths \
                        and subpaths in a list

    @returns {Object}   Yield all the path from the starting point to the end
    """

    def __getSubPaths(self, path):
        auxPath = []
        previousPoint = None

        # Let's iterate over all the points to get all the possible sub-paths
        for point in path:
            # If it starts a new sub-path
            if (
                previousPoint != None
                and point["depthLevel"] < previousPoint["depthLevel"]
            ):
                yield {
                    "path": auxPath,
                    "pathLength": len(auxPath),
                    "steepLength": auxPath[0]["value"]
                    - auxPath[len(auxPath) - 1]["value"],
                }

                # If starts a new sub-path in the middle of another subpath
                # let's add all the point from the beggining of the previous path
                if point["depthLevel"] > 0:
                    auxPath = auxPath[: point["depthLevel"]]
                else:
                    auxPath = []

            auxPath.append(point)
            previousPoint = point

        # When there are sub-paths without other sub-paths in the middle
        # we just save them
        if len(auxPath) > 0:
            yield {
                "path": auxPath,
                "pathLength": len(auxPath),
                "steepLength": auxPath[0]["value"] - auxPath[len(auxPath) - 1]["value"],
            }

