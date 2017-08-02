import React from 'react';
import Slide from '../../slide/slide.js';
import Panel from '../../panel/panel.js'; 
import './slide_1_08.css';
import Button from '../../button/button.js';

export default class slide_1_08 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_08' ref='slide_1_08' data-state={this.state.slidestate}>
        <div className='text text_1'/>
        <Panel>
          <div className='item item_1'></div>
          <Button changeSlideState={this} icon='drip'>
            <div className='btn-text'/>
          </Button>
        </Panel>
        <div className='item item_2'></div>
        <div className='item item_3'></div>
        <div className='item item_4'></div>
      </div>
    );
  }

}
