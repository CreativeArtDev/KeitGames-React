import React, { Component } from 'react';

import '../../styles/style.css';

export default class MainButton extends Component {
  render() {
    return (
      <div className="testbutton">
        {this.props.name}
      </div>
    )
  }
}
