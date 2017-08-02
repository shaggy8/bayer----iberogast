import React from 'react';
import Slide from '../../slide/slide.js';
import Panel from '../../panel/panel.js';
import Button from '../../button/button.js';
import './slide_2_125.css';

export default class slide_2_125 extends Slide {
  render() { 
    return (
      <div className='slide slide_2_125' ref='slide_2_125' data-state={this.state.slidestate}>
        <div className='text text_1'/>
        <Panel>
          <div className='item item_1'></div>
          <div className='item item_2'></div>
          <Button icon='drip' changeSlideState={this}>
            <div className='btn-text'/>
          </Button>
        </Panel>
        <div className='item item_3'></div>
        <div className='item item_4'></div>
        <div className='item guts'></div>
        <div className='item guts_green'></div>
        <div className='text_green' />
      </div>
    );
  }

}
