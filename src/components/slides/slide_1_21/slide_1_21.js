import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_21.css';
import Panel from '../../panel/panel.js'; 
import ToggleButton from '../../toggleButton/toggleButton.js';


export default class slide_1_21 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_21' ref='slide_1_21' data-state={this.state.slidestate}>
        <div className='bg'/>
        <div className='header' />
        <Panel>
          <div className='panel__text_wrapper'>
            <div className='panel__text_1'/>
            <div className='panel__text_2'/>
          </div>
        </Panel>
        <div className='toggle'>
          <ToggleButton changeState={::this.setState} />
        </div>
        <div className='graph__bars_2'/>
        <div className='graph__bars_1'/>
        <div className='graph__numbers_1'/>
        <div className='graph__numbers_2'/>
        <div className='text_1'/>
        <div className='text_2'/>
      </div>
    );
  }
}
