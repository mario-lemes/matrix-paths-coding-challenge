import React, { Component } from 'react';
import {
  Input,
  Dropdown,
  Form,
  Button,
  Icon,
  Divider,
  Message,
} from 'semantic-ui-react';

class ControlPanel extends Component {
  render() {
    const {
      onHandleFileUploadInput,
      onHandleFileUploadButton,
      onHandleDropdownChange,
      onHandleRequestingPathButton,
      isNewFile,
      uploadingFile,
      requestingPath,
      filesUploaded,
      fileSelected,
      isImpatient,
    } = this.props;

    return (
      <React.Fragment>
        <Form.Field>
          <label>1. Upload a new file:</label>
          <Input
            type="file"
            onChange={onHandleFileUploadInput}
            className="upload-button"
            placeholder="Upload a text file..."
            defaultValue=""
            disabled={uploadingFile}
          />
        </Form.Field>
        <Form.Field>
          <Button
            animated="vertical"
            fluid
            disabled={!isNewFile || uploadingFile}
            loading={uploadingFile}
            color="teal"
            onClick={onHandleFileUploadButton}
          >
            <Button.Content hidden>
              <Icon name="upload" />
            </Button.Content>
            <Button.Content visible>Upload File</Button.Content>
          </Button>
        </Form.Field>
        <Divider />
        <Form.Field>
          <label>2. Select a file:</label>
          <Dropdown
            onChange={onHandleDropdownChange}
            placeholder="Select a file already uplaoded..."
            fluid
            selection
            disabled={!filesUploaded || filesUploaded.length <= 0}
            options={filesUploaded}
            value={fileSelected}
          />
        </Form.Field>
        <Form.Field>
          <Button
            fluid
            color="teal"
            disabled={!fileSelected || requestingPath}
            loading={requestingPath}
            onClick={onHandleRequestingPathButton}
          >
            Get Longest Path
          </Button>
          <Message
            className="impatient-message"
            compact
            color="teal"
            hidden={!isImpatient}
          >
            Please be patient, the script is still running
          </Message>
        </Form.Field>
      </React.Fragment>
    );
  }
}

export default ControlPanel;
