import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_00.css';

export default class slidestatelide_00 extends Slide {

  render() { 
    //console.log(this.state);
    return (
      <div className='slide slide_00' ref='slide_00' data-state='0'>
        <div className='choose scenario'>
          <div className='header'/>
          <div className='button-short' data-scenario='shortScenario' />
          <div className='button-full' data-scenario='fullScenario' />
        </div>
        <div className='choose patient'>
          <div className='header'/>
          {/*
          <div className='green-box green-box_1' data-link='poc_1#chapter-1'>
            <div className='text text_1'></div>
            <div className='photo photo_1'></div>
          </div>
          */}
          <div className='green-box green-box_1' data-link='poc_2#chapter-1'>
            <div className='text text_2'></div>
            <div className='photo photo_2'></div>
          </div>
          <div className='green-box green-box_2' data-link='poc_3#chapter-1'>
            <div className='text text_3'></div>
            <div className='photo photo_3'></div>
          </div>
          <div className='green-box green-box_3' data-link='poc_4#chapter-1'>
            <div className='text text_4'></div>
            <div className='photo photo_4'></div>
          </div>
          <div className='id'>L.RU.MKT.CC.11.2016.1556</div>
        </div>
      </div>
    );
  }
}