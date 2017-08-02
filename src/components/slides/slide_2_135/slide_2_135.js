import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_135.css';
import Panel from '../../panel/panel.js'; 


export default class slide_2_135 extends Slide {
  render() { 
    return (
      <div className='slide slide_2_135' ref='slide_2_135' data-state={this.state.slidestate}>
        <div className='bg_1' />
        <div className='header'/>
        <Panel>
          <div className='panel__number'/>
          <div className='panel__text'/>
        </Panel>
      </div>
    );
  }
}
