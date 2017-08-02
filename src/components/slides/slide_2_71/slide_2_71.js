import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_71.css';
import Panel from '../../panel/panel.js';


export default class slide_2_71 extends Slide {
  render() { 
    return (
      <div className='slide slide_2_71' ref='slide_2_71' data-state={this.state.slidestate}>
        <div className='text text_outer'></div>
        <Panel>
          <div className='panel__text panel__text_inner'></div>
        </Panel>
      </div>
    );
  }
}
