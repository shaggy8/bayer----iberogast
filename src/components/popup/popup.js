import React, { Component } from 'react';

import './popup.css'
export default class Popup extends Component {
  render() {
    const { that } = this.props;
    const visible = that.state.popupIsVis
    if (visible) 
      return (
        <div className='popup-wrapper' onClick={that.hadlerPopupToggle}>
          <div className='popup'  >
            {this.props.children}
            <div className='btn-close' />
          </div>
        </div>
      );
    else
      return (<div className=''></div>)
  }
}