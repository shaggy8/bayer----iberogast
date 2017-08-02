import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_36.css';
import Panel from '../../panel/panel.js';

export default class slide_1_36 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_36' ref='slide_1_36' data-state={this.state.slidestate}>
        <div className='bg'>
          <Panel>
            <div className='panel__text'/>
          </Panel>
          <div className='scope'/>
          <div className='med'/>
        </div>
      </div>
    );
  }
}
