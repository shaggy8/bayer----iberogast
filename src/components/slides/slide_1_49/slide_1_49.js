import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_49.css';
import Panel from '../../panel/panel.js';
import Button from '../../button/button.js';

export default class slide_1_49 extends Slide {
  render() { 
    return (
      <div className='slide slide_1_49' ref='slide_1_49' data-state={this.state.slidestate}>
        <div className='bg'>
        <div className='header' />
          <Panel>
            <div className='panel__number'/>
            <div className='panel__text_1'/>
            <div className='panel__text_2'/>
            <Button changeSlideState={this} icon='drip'>
              <div className='iberogast'/>
            </Button>
          </Panel>
          <div className='stomach_1'/>
          <div className='stomach_2'/>
          <div className='info_1'/>
          <div className='info_2'/>
          <div className='info_3'/>
          <div className='info_4'/>
          <div className='lights'/>
        </div>
      </div>
    );
  }
}
