import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react';
import ControlPanel from './components/ControlPanel';
import TextArea from './components/TextArea';
import AreaChart from './components/AreaChart';
import CustomMessage from './components/CustomMessage';
import { uploadFile } from './api';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFile: null,
      uploadingFile: false,
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
    this.setState((state, props) => ({ uploadingFile: true }));

    uploadFile(this.state.newFile)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        this.setState((state, props) => ({
          uploadingFile: false,
          isError: true,
          error: {
            header: 'There was some error uploading the file',
            list: [error.response.data.message],
          },
        }));
      });
  }

  onHandleErrorDismiss(event) {
    event.preventDefault();
    this.setState((state, props) => ({
      isError: false,
      error: {
        header: '',
        list: [],
      },
    }));
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
            <TextArea />
          </div>
          <div className="control-panel-container col-xs-12 col-md-4">
            <ControlPanel
              onHandleFileUploadInput={this.onHandleFileUploadInput}
              onHandleFileUploadButton={this.onHandleFileUploadButton}
              isNewFile={this.state.newFile}
              uploadingFile={this.state.uploadingFile}
              filesUploades={this.state.filesUploaded}
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
