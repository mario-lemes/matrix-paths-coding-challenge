import io

"""
Class to get a bidimensional matrix of integers
"""


class MatrixParser:
    """
    getFileMatrix(): method to get the matrix and its dimensions from
    a text file

    @params {String} filePath Path where is located the file with the matrix data

    @return {matrix: Integer[][], columns: Integer, rows: Integer}
    """

    def getFileMatrix(self, filePath):
        # Let's read the file
        with open(filePath, "r") as file:
            # Get the matrix dimensions from the first line
            dimensions = file.readline().strip().split(" ")

            # Check dimensions type value
            if dimensions[0].isalpha() or dimensions[1].isalpha():
                raise Exception(
                    f"Dimensions of the matrix are not numeric values, "
                    f"given: {dimensions[0]}, {dimensions[1]}"
                )

            # Pre generate an empty matrix[mxn]
            matrix = [
                [None for x in range(int(dimensions[0]))]
                for y in range(int(dimensions[1]))
            ]

            # Iterate over the rest of the file to get the matrix content
            i = 0
            for line in file.readlines():
                j = 0
                for value in line.strip().split(" "):
                    # Check matrix type value
                    if value.isalpha():
                        raise Exception(
                            f"Matrix item are not a numeric value, "
                            f"given: {value}, in line {i}"
                        )

                    matrix[i][j] = int(value)
                    j += 1
                i += 1

        return {
            "columns": int(dimensions[0]),
            "rows": int(dimensions[1]),
            "content": matrix,
        }
