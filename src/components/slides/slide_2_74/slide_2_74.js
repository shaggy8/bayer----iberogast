import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_74.css';
import Panel from '../../panel/panel.js';
import Button from '../../button/button.js';

export default class slide_2_74 extends Slide {
  render() { 
    return (
      <div className='slide slide_2_74' ref='slide_2_74' data-state={this.state.slidestate}>
        <div className='header' />
        <div className='stomach-bad' />        
        <div className='stomach-good' />
        <Panel>
          <div className='text_on_panel_1' />
          <div className='text_on_panel_2' />
          <Button icon='drip' changeSlideState={this}>
            <div className='btn-text'/>
          </Button>
        </Panel>
        <div className='pointer_to_stomach' />
        <div className='pointer_to_stomach_1' />
        <div className='pointer_to_stomach_2' />
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
