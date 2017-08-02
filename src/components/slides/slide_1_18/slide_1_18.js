
import React from 'react';
import Slide from '../../slide/slide.js';
import Panel from '../../panel/panel.js';
import './slide_1_18.css';



export default class slide_1_18 extends Slide {


  render() { 
    return (
      <div className='slide slide_1_18' ref='slide_1_18' data-state={this.state.slidestate}>
        <div className='text_1'></div>
        <Panel>
          <div className='panel__text'></div>
        </Panel>

      </div>
    );
  }
}
