import React from 'react';
import Slide from '../../slide/slide.js'; 
import './slide_3_146.css';
import Panel from '../../panel/panel.js'; 
import Popup from '../../popup/popup.js';
var popupImg = require('./img/pop_up.jpg')

export default class slide_3_146 extends Slide {

  constructor(){
    super()
    this.state = {
      slidestate : '0'
    };
  }

  render() { 
    return (
      <div className='slide slide_3_146' ref='slide_3_146' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <div className='man' />
        <Panel>
          <div className='panel__text panel__text_1'></div>
          <div onClick={this.hadlerPopupToggle} className='button plus'>Подробнее</div>
        </Panel>
        <Popup that={this}>
          <img src={popupImg}/> 
        </Popup>
      </div>
    );
  }
}