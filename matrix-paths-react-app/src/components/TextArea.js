import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    return <div className="textarea">{this.props.children}</div>;
  }
}

export default TextArea;
