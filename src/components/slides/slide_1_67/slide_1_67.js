
import React from 'react'
import './slide_1_67.css';
import Panel from '../../panel/panel.js';
import Slide from '../../slide/slide.js';

//popup
import Popup from '../../popup/popup.js';
var popupImg = require('./img/pop_up.jpg')



export default class slide_1_67 extends Slide {

  render() {
    return (
      <div className='slide slide_1_67' ref='slide_1_67' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel>
          <div className='panel__text panel__text_1'></div>
        </Panel>
        <div onClick={this.hadlerPopupToggle} className='button plus'>Подробнее</div>
        <Popup that={this}>
          <img src={popupImg}/>
        </Popup>
      </div>
    );
  }
}
