import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_3_172.css';
import Panel from '../../panel/panel.js'; 


export default class slide_3_172 extends Slide {


  render() { 
    return (
      <div className='slide slide_3_172' ref='slide_3_172' data-state={this.state.slidestate}>
        <div className='text text_1'/>
        <Panel>
          <div className='item item_1'></div>
          <div data-state='1' onClick={this.onBtnClick.bind(this)} className='button drip'>Иберогаст®</div>
        </Panel>
        <div className='item item_2'></div>
        <div className='item item_3'></div>
        <div className='item item_4'></div>
      </div>
    );
  }

  onBtnClick(e){
    let btn = document.querySelector('.button');
    btn.classList.toggle('active', true);
    this.handleRefreshState(e);
  }
}
