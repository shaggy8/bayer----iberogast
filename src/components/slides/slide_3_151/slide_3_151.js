import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_3_151.css';
import Panel from '../../panel/panel.js'; 
import Popup from '../../popup/popup.js';
//import Button from '../../button/button.js';
var popupImg = require('./img/popup.jpg')

export default class slide_3_151 extends Slide {
  render() { 
    return (
      <div className='slide slide_3_151' ref='slide_3_151' data-state={this.state.slidestate}>        
        <div className='bg bg_3' />
        {/*<div className='bg bg_2' />*/}
        <div className='bg bg_1' />
        <div className='text text_1'></div>
        {/*<div className='man-bad' />
        <div className='man-good' />*/}
        <Panel>
          <div className='panel__text panel__text_3'></div>
          <div className='panel__text panel__text_2'></div>
          <div className='panel__text panel__text_1'></div>
          <div onClick={this.hadlerPopupToggle} className='button plus'>
            Подробнее
          </div>
          <div onClick={this.onButtonClick.bind(this)} data-state='1' className='button drip'>
            Иберогаст®
          </div>
        </Panel>
        <Popup that={this}>
          <img src={popupImg} />
          <div className='rect_1' />
          <div className='popup__content' />
        </Popup>
      </div>
    );
  }

  onButtonClick(e){
    let btn = document.querySelector('.button.drip');
    btn.classList.toggle('active', true);
    this.handleRefreshState(e);
    setTimeout(()=>{
      btn.style.pointerEvents = 'none';
    },2500);
  }

}
