import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class CustomMessage extends Component {
  render() {
    const { error, isError, onHandleErrorDismiss } = this.props;
    return (
      isError &&
      ((
        <div className="message">
          <Message
            error={isError}
            header={error.header}
            list={error.list}
            onDismiss={onHandleErrorDismiss}
          />
        </div>
      ) ||
        null)
    );
  }
}

export default CustomMessage;
