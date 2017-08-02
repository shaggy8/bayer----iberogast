import React from 'react';
import Slide from '../../slide/slide.js';
import Panel from '../../panel/panel.js'; 
import './slide_3_149.css';

export default class slide_3_149 extends Slide {
  render() { 
    return (
      <div className='slide slide_3_149' ref='slide_3_149' data-state={this.state.slidestate}>
        <div className='bg_2' />
        <div className='bg_1' />
        <div className='tip tip_2' />
        <div className='tip tip_1' />
        <div className='text text_1'></div>
        <Panel>
          <div className='panel__text panel__text panel__text_2'></div>
          <div className='panel__text panel__text panel__text_1'></div>
          <div onClick={this.clickHandler.bind(this)} className='button drip' data-state='1'>Подробнее</div>
        </Panel>
      </div>
    );
  }

  clickHandler(e){
    document.querySelector('.button').classList.toggle('active', true);
    this.handleRefreshState(e);
  }
}
