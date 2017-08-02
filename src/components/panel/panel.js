import React, { Component } from 'react';

import './panel.css'

export default class Panel extends Component {
  constructor(props){
    super(props);
    this.className = this.props.className || 'panel';
  }
  render() {
    return (
      <div className={this.className}>
        {this.props.children}
      </div>
    )
  }
}