import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_134.css';
import Panel from '../../panel/panel.js';
import ToggleButton from '../../toggleButton/toggleButton.js';

export default class slide_2_134 extends Slide {
  render() { 
    return (
      <div className='slide slide_2_134' ref='slide_2_134' data-state={this.state.slidestate}>
        <div className='bg' />
        <div className='header' />
        <Panel>
          <div className='panel__number'/>
          <div className='panel__text'/>
        </Panel>

        <div className='toggle'>
          <ToggleButton changeState={::this.setState}/>
        </div>

        <div className='graph graph_2'>
          <div className='axes_2'/>
          <div className='bars_2'/>
          <div className='info_2'/>
        </div>
        <div className='graph graph_1'>
          <div className='axes_1'/>
          <div className='bars_1'/>
          <div className='info_1'/>
        </div>
      </div>
    );
  }


}
