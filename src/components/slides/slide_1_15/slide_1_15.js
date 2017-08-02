import React from 'react';
import Slide from '../../slide/slide.js';
import Panel from '../../panel/panel.js'; 
import './slide_1_15.css';

export default class slide_1_15 extends Slide {
  render() { 
    return (
      <div className='slide slide_1_15' ref='slide_1_15' data-state={this.state.slidestate}>
      <div className='text text_1'></div>
      <div className='bars'></div>
      <div className='numbers'></div>
      <div className='text text_3'></div>
      <Panel> 
        <div className='text text_2'></div>
      </Panel>
      </div>
    );
  }
}
