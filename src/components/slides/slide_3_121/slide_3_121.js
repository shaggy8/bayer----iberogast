import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_3_121.css';
import Panel from '../../panel/panel.js';

export default class slide_3_121 extends Slide {
  render() { 
    return (
      <div className='slide slide_3_121' ref='slide_3_121' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel className='panel'>
          <div className='panel__text panel__text_1'></div>
        </Panel>
      </div>
    );
  }
}
