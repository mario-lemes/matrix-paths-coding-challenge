import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react';
import ControlPanel from './components/ControlPanel';
import TextArea from './components/TextArea';
import AreaChart from './components/AreaChart';
import CustomMessage from './components/CustomMessage';
import { uploadFile, getPath } from './api';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFile: null,
      uploadingFile: false,
      requestingPath: false,
      paths: [],
      textAreaContent: [],
      filesUploaded: [],
      fileSelected: null,
      isError: false,
      error: {
        header: '',
        list: [],
      },
    };

    this.onHandleFileUploadInput = this.onHandleFileUploadInput.bind(this);
    this.onHandleFileUploadButton = this.onHandleFileUploadButton.bind(this);
    this.onHandleDropdownChange = this.onHandleDropdownChange.bind(this);
    this.onHandleRequestingPathButton = this.onHandleRequestingPathButton.bind(
      this,
    );
    this.onHandleErrorDismiss = this.onHandleErrorDismiss.bind(this);
  }

  onHandleFileUploadInput(event) {
    event.preventDefault();
    this.setState({
      newFile: event.target.files[0],
    });
  }

  async onHandleFileUploadButton(event) {
    event.preventDefault();
    this.setState({ uploadingFile: true });

    uploadFile(this.state.newFile)
      .then(response => {
        const newFile = [];
        if (
          !this.state.filesUploaded.some(
            file => file.value === response.data.file.filename,
          )
        ) {
          newFile.push({
            text: response.data.file.filename,
            value: response.data.file.filename,
          });
        }

        this.setState((state, props) => ({
          uploadingFile: false,
          filesUploaded: [...state.filesUploaded, ...newFile],
        }));
      })
      .catch(error => {
        this.setState({
          uploadingFile: false,
          isError: true,
          error: {
            header: 'There was some error uploading the file',
            list: error.response.data.message
              ? [error.response.data.message]
              : [],
          },
        });
      });
  }

  onHandleErrorDismiss(event) {
    event.preventDefault();
    this.setState({
      isError: false,
      error: {
        header: '',
        list: [],
      },
    });
  }

  onHandleDropdownChange(event, { value }) {
    event.preventDefault();
    this.setState({ fileSelected: value });
  }

  onHandleRequestingPathButton(event) {
    event.preventDefault();
    this.setState({ requestingPath: true });

    getPath(this.state.fileSelected)
      .then(response => {
        console.log(response);
        const pathUnfolded = response.data.result.path.map(item => item.value);

        const content = (
          <div key={this.state.paths.length}>
            <p className="file-name">
              <span>File:</span> {this.state.fileSelected}
            </p>
            <ul>
              <li>
                <span>Longest path:</span> {pathUnfolded.join(',')}
              </li>
              <li>
                <span>Length:</span> {response.data.result.pathLength}
              </li>
              <li>
                <span>Steep gradient:</span> {response.data.result.steepLength}
              </li>
              <li>
                <span>Execution time:</span>
              </li>
            </ul>
          </div>
        );

        this.setState((state, props) => ({
          requestingPath: false,
          paths: [...state.paths, response.data.result],
          textAreaContent: [...state.textAreaContent, content],
        }));
      })
      .catch(error => {
        this.setState({
          requestingPath: false,
          isError: true,
          error: {
            header: 'There was some error obtaining the results',
            list: error.response.data.message
              ? [error.response.data.message]
              : [],
          },
        });
      });
  }

  render() {
    return (
      <div className="app container">
        <Header as="h1">
          Coding Challenge App{' '}
          <span>
            - by{' '}
            <a
              target="_blank"
              href="mailto:mariolemesmedina@gmail.com"
              title="Email address"
            >
              Mario Lemes Medina
            </a>
          </span>
          <div className="icons">
            {' '}
            <a
              target="_blank"
              href="https://github.com/mario-lemes"
              title="Git Hub Account"
            >
              <Icon link name="github" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/mario_lemes"
              title="Twitter Account"
            >
              <Icon link name="twitter" />
            </a>
          </div>
        </Header>
        <div className="body row">
          <div className="message-container col-12">
            <CustomMessage
              onHandleErrorDismiss={this.onHandleErrorDismiss}
              isError={this.state.isError}
              error={this.state.error}
            />
          </div>
          <div className="textarea-container col-xs-12 col-md-8">
            <TextArea
              paths={this.state.paths}
              textAreaContent={this.state.textAreaContent}
            />
          </div>
          <div className="control-panel-container col-xs-12 col-md-4">
            <ControlPanel
              onHandleFileUploadInput={this.onHandleFileUploadInput}
              onHandleFileUploadButton={this.onHandleFileUploadButton}
              onHandleDropdownChange={this.onHandleDropdownChange}
              onHandleRequestingPathButton={this.onHandleRequestingPathButton}
              isNewFile={this.state.newFile}
              uploadingFile={this.state.uploadingFile}
              requestingPath={this.state.requestingPath}
              filesUploaded={this.state.filesUploaded}
              fileSelected={this.state.fileSelected}
            />
          </div>
          <div className="chart-container col-xs-12 col-md-8">
            <AreaChart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
