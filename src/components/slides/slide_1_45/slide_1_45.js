import Panel from '../../panel/panel.js';
import Slide from '../../slide/slide.js';
import React from 'react';
import './slide_1_45.css';

export default class slide_1_45 extends Slide {
  render() { 
    return (
      <div className='slide slide_1_45' ref='slide_1_45' data-state={this.state.slidestate}>
        <div className='header'></div>
        <div className='graph'></div>
        <Panel>
          <div className='text-on-panel'></div>
        </Panel>
      </div>
    );
  }
}
