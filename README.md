# Coding Challenge

This coding challenge pretend to find the longest descendent (and then steepest) path on a matrix given through a txt file, where the first line represent the number of columns and rows:

```shell
4 4
4 8 7 3
2 5 9 3
6 3 2 5
4 4 1 6
```

On this particular map, the longest path down would be 9-5-3-2-1.

In the repository you will find some sample data as txt files: 4x4.txt, 5x5.txt, map.txt.

💻 Online Demo: [https://coding-challenge.mariolemesmedina.me/](https://coding-challenge.mariolemesmedina.me/)

The project it's based on three parts, a front-end app, back-end server and finally a service in charge of doing the real calculation.

Let's start from the top to the bottom.

## Python Service

The service in charge of doing the calculation given a txt file. This project is on the folder **matrix-paths-python-service**.

### ◼️ Requirements

- Python 3.6+ (spread operators, generators and string interpolation are used in this project)

### ◼️ Usage

This service is able to run it independtly, out of the stack:

```shell
# From the project directory run
$ python main.py a/random/path/fileName.txt
```

## Node-Express Server

The backend server provide a public API to interact with the service in a very easy way. This project is on the folder **matrix-paths-node-server**. It consist in a two step proccess where you upload the text file first and then you request the calculation of the longest path.

### ◼️ Requirements

- NodeJS v10
- npm

**An additional requirement before start:** make sure to create `envs/.dev.env` in the project directory with these env vars set, feel free to set the server params with your own preferences:

```json
# Node instance
DEBUG=false
NODE_ENV=development

# Server params
PROTOCOL=http
HOST=localhost
PORT=3001
FILES_PATH='matrix-paths-node-server\files'
SCRIPT_TYPE='python'
SCRIPT_PATH='matrix-paths-python-service\'
```

### ◼️ Dependencies installation

Before run the server you have to install all its dependencies:

```shell
# From the project directory run
$ npm install
```

### ◼️ Usage

In order to run the server just type in a terminal:

```shell
# From the project directory run
$ npm run start
```

You can use POSTMan, cURL, or any tool you consider appropiate to interact with the API enpoints which are:

#### `POST /api/v1/matrixes`

**Body Params:**

- {Blob} `file` Text file with the data to parse and get the longest path

**Return (Succesfully):**

- {Boolean} `ok` Will be true if everything was good
- {String} `file.filename` File name
- {String} `file.mimetype` File type
- {String} `file.originalname` Original name, just in case there is any convention rule to rename the files when there is stored
- {Integer} `file.size` File size in bytes

**Return (Error):**

- {Boolean} `ok` Will be false if there was any error during the request
- {String} `error` Error code
- {String} `message` Error message

#### `GET /api/v1/paths?file=fileName`

**Query Params:**

- {String} file File name to get the path

**Return (Succesfully):**

- {Boolean} `ok` Will be true if everything was good
- {Object[]} `result.path` Array with each point belong to the longest path
  - {Ineter} `value` Point value on the matrix
  - {Ineter} `row` Row number
  - {Ineter} `column` Column number
- {Integer} `result.pathLength` Path length
- {Integer} `result.steepLength` Steep length
- {Integer} `executionTime` Time in secs whic take the script in calculate the longest path

**Return (Error):**

- {Boolean} `ok` Will be false if there was any error during the request
- {String} `error` Error code
- {String} `message` Error message

### ◼️ Test

In the back-end project I developed some unit testing in order to assure everything is working as expected. You can execute those test throuh:

```shell
# From the project directory run
$ npm run test
# Or
$ npm run test:watch # (hot reloading)
```

## React App

The frontend app is developed with React framework and allow you to upload files and get the longest path from them. Moreover, you will get some extra information in a visual way you may find useful like the execution time which take to calculate the longest path. This project is on the folder **matrix-paths-react-app**.

### ◼️ Requirements

- NodeJS v10
- npm

### ◼️ Dependencies installation

Before run the frontend app you have to install its dependencies:

```shell
# From the project directory run
$ npm install
```

### ◼️ Usage

The frontend app is totally isolated from the backend server and the python service (it's already connected to my own server) so you can run it in standalone mode and play around with it:

```shell
# From the project directory run
$ npm run start
```

## ❕ Key points I want to highliht

- I've developed the challenge in a way which will be very easy sclaing up and adding more features.
- The service allow matrixes with negatives values also.
- The algorithm which make the calculation has O(n) complexity.
- The [online demo](https://coding-challenge.mariolemesmedina.me/) is hosted on t2.micro EC2 instance on AWS so be patient :D

## ❕ Future features

The project allow adding new more features in a very easy way since the service itself is based on two separate classes, one to parse matrixes, and the second one to make the path calculations.

Due their structure would be easy to add:

**Matrix parser:**

- Parsing paralelization
- Matrix random generation
- Caching files
- Support for other file formats

**Path finder:**

- Support for different calculation criteria (shortest path, longest above X, min/max global)
- Knowing the highest/lowest value on the matrix would be possible to add some heuristich finding patterns, like starting in a random point and limiting the highest and lowest boundaries based on the data given
