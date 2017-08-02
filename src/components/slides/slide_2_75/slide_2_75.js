import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_75.css';
import Panel from '../../panel/panel.js';
import Reference from '../../reference/reference.js';

export default class slide_2_75 extends Slide {
  render() { 
    return (
      <div className='slide slide_2_75' ref='slide_2_75' data-state={this.state.slidestate}>
        <div className='header' />
        <div className='text' />
        <div className='graph' />
        <div className='graph-lines' />
        <Panel>
          <div className='text_on_panel' />          
        </Panel>
        <Reference>
          <div className='reference_text'></div>
        </Reference>
      </div>
    );
  }
}
