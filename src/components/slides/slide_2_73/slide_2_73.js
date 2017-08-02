import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_73.css';
import Reference from '../../reference/reference.js';

export default class slide_2_73 extends Slide {
  render() { 
    return (
      <div className='slide slide_2_73' ref='slide_2_73' data-state={this.state.slidestate}>
        <div className='text'></div>
        <Reference>
          <div className='reference_text'></div>
        </Reference>
      </div>
    );
  }
}
