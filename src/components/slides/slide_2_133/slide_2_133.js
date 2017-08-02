
import React from 'react'
import './slide_2_133.css';
import Panel from '../../panel/panel.js'; 
import Slide from '../../slide/slide.js'; 

//popup
import Popup from '../../popup/popup.js';
var popupImg = require('./img/pop_up.jpg')



export default class slide_2_133 extends Slide {

  render() { 
    return (
      <div className='slide slide_2_133' ref='slide_2_133' data-state={this.state.slidestate}>
        <div className='header'></div>
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
