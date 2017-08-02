import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_04.css';
import Panel from '../../panel/panel.js';

export default class slide_1_04 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_04' ref='slide_1_04' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel className='panel'>
          <div className='panel__text panel__text_1'></div>
        </Panel>
      </div>
    );
  }
}