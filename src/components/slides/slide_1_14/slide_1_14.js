
import React from 'react';
import Slide from '../../slide/slide.js';
import Panel from '../../panel/panel.js'; 
import './slide_1_14.css';



export default class slide_1_14 extends Slide {


  render() { 
    return (
      <div className='slide slide_1_14' ref='slide_1_14' data-state={this.state.slidestate}>
      <Panel>
        <div className='panel__text_1'></div>
        <div className='panel__item'></div>
      </Panel>
      <div className='item_2'></div>
      </div>
    );
  }
}
