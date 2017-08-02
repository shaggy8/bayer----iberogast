import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_68.css';
import Panel from '../../panel/panel.js';

export default class slide_1_68 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_68' ref='slide_1_68' data-state={this.state.slidestate}>
        <div className='bg'>
          <Panel>
            <div className='panel__text'/>
          </Panel>
          <div className='shadow'/>
          <div className='layer_1'/>
        </div>        
      </div>
    );
  }
}
