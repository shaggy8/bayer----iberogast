import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_39.css';
import Panel from '../../panel/panel.js'; 
import ToggleButton from '../../toggleButton/toggleButton.js';

export default class slide_1_39 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_39' ref='slide_1_39' data-state={this.state.slidestate}>
        <div className='bg bg_2'>
          <div className='chart_2'/>
        </div>
        <div className='bg bg_1'>
          <div className='arrow_1'/>
        </div>
        <div className='header' />
        <Panel>
          <div className='panel__text'/>
          <div className='panel__text_2'/>
        </Panel>

        <div className='toggle'>
          <ToggleButton changeState={::this.setState}/>
        </div>

      </div>
    );
  }

}
