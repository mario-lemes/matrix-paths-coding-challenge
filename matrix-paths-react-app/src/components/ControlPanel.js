import React, { Component } from 'react';
import {
  Input,
  Dropdown,
  Form,
  Button,
  Icon,
  Divider,
} from 'semantic-ui-react';

class ControlPanel extends Component {
  render() {
    const {
      onHandleFileUploadInput,
      onHandleFileUploadButton,
      isNewFile,
      uploadingFile,
    } = this.props;
    return (
      <React.Fragment>
        <Form.Field>
          <label>Upload a New File:</label>
          <Input
            type="file"
            onChange={onHandleFileUploadInput}
            className="upload-button"
            placeholder="Select a text file..."
            defaultValue=""
            disabled={uploadingFile}
          />
        </Form.Field>
        <Form.Field>
          <Button
            animated="vertical"
            fluid
            disabled={!isNewFile}
            loading={uploadingFile}
            color="teal"
            onClick={onHandleFileUploadButton}
          >
            <Button.Content hidden>Upload File</Button.Content>
            <Button.Content visible>
              <Icon name="upload" />
            </Button.Content>
          </Button>
        </Form.Field>
        <Divider />
        <Form.Field>
          <label>Files Uploaded:</label>
          <Dropdown
            placeholder="Select File Uploaded"
            fluid
            selection
            options={[
              {
                text: 'Jenny Hess',
                value: 'Jenny Hess',
                icon: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
              },
            ]}
          />
        </Form.Field>
        <Form.Field>
          <Button fluid color="teal">
            Get Path
          </Button>
        </Form.Field>
      </React.Fragment>
    );
  }
}

export default ControlPanel;
