import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_02.css';

export default class slidestatelide_1_02 extends Slide {

  handlClickLabel (e) {
      console.log(e.target)
  }
  render() { 
    return (
      <div className='slide slide_1_02' ref='slide_1_02' data-state='0'>
        <div className='text'></div>
        <div className='1_02'></div>
      </div>
    );
  }
}