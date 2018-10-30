import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react';
import ControlPanel from './components/ControlPanel';
import TextArea from './components/TextArea';

import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFile: null,
      uploadingFile: false,
    };

    this.onHandleFileUploadInput = this.onHandleFileUploadInput.bind(this);
    this.onHandleFileUploadButton = this.onHandleFileUploadButton.bind(this);
  }
  onHandleFileUploadInput(event) {
    event.preventDefault();
    this.setState({
      newFile: event.target.files[0],
    });
  }

  onHandleFileUploadButton(event) {
    event.preventDefault();
    this.setState((state, props) =>
      this.setState({ uploadingFile: !state.uploadingFile }),
    );

    /*axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
  }

  render() {
    return (
      <div className="app container">
        <Header as="h1">
          Coding Challenge App -{' '}
          <span>
            by{' '}
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
          <div className="textarea-container col-xs-12 col-md-8">
            <TextArea />
          </div>
          <div className="control-panel-container col-xs-12 col-md-4">
            <ControlPanel
              onHandleFileUploadInput={this.onHandleFileUploadInput}
              onHandleFileUploadButton={this.onHandleFileUploadButton}
              isNewFile={this.state.newFile}
              uploadingFile={this.state.uploadingFile}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
