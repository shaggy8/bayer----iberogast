import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_20.css';
import Panel from '../../panel/panel.js'; 
import Popup from '../../popup/popup.js';
var popupImg = require('./img/popup.jpg')


export default class slide_1_20 extends Slide {


  render() { 
    return (
      <div className='slide slide_1_20' ref='slide_1_20' data-state={this.state.slidestate}>
        <div className='bg'/>
        <div className='header'/>
        <Panel>
          <div className='panel__text'/>
          <div onClick={this.hadlerPopupToggle} className='button plus'>Подробнее</div>        
        </Panel>
        <div className='layer_1'/>
        <div className='drop'/>
        <Popup that={this}>
          <img src={popupImg}/> 
        </Popup>
      </div>
    );
  }
}
