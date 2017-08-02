import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_107.css';

export default class slide_2_107 extends Slide {

  render() { 
    return (
      <div className='slide slide_2_107' ref='slide_2_107' data-state={this.state.slidestate}>
        <div className='header' />
        {/*<div className='guts' />
        <div className='box' />*/}
        <div className='text_1' />
        <div className='text_2' />
        <div className='text_3' />
        <div className='text_4' />
        <div className='text_5' />
      </div>
    );
  }
}
