import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_16.css';
import Panel from '../../panel/panel.js';
import Button from '../../button/button.js';

export default class slide_1_16 extends Slide {
  render() { 
    return (
      <div className='slide slide_1_16' ref='slide_1_16' data-state={this.state.slidestate}>
        <div className='header' />
        <div className='stomach-bad' />        
        <div className='stomach-good' />
        <Panel>          
          <Button icon='drip' changeSlideState={this} startClock>
            <div className='btn-text'/>
          </Button>          
        </Panel>        
        <div className='clock'>
            <div className='clock__background' />
            <div className='clock__text'>00:00:00</div>
            <div className='clock__active' />
          </div>
        <div className='text_on_panel' />
        <div className='glow' />
        <div className='iberogast' />
        <div className='lights'>
          <div className='light light_1' />
          <div className='light light_2' />
          <div className='light light_3' />
          <div className='light light_4' />
          <div className='light light_5' />
          <div className='light light_6' />
          <div className='light light_7' />
          <div className='light light_8' />
          <div className='light light_9' />
          <div className='light light_10' />
          <div className='light light_11' />
        </div>        
      </div>
    );
  }
}
