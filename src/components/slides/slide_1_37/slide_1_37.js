import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_37.css';
import Panel from '../../panel/panel.js'; 


export default class slide_1_37 extends Slide {
  render() { 
    return (
      <div className='slide slide_1_37' ref='slide_1_37' data-state={this.state.slidestate}>
        <div className='text text_1'/>
        <Panel>
          <div className='item item_1'></div>
          <div data-state='1' onClick={this.onBtnClick.bind(this)} className='button drip'><div className='iberogast'/></div>
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
