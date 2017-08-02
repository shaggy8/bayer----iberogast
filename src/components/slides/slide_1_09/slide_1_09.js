import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_09.css';

export default class slide_1_09 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_09' ref='slide_1_09' data-state={this.state.slidestate}>
        <div className='logo' />
        {/*<div className='guts' />
        <div className='box' />*/}
        <div className='text_1' />
        <div className='text_2' />
        <div className='text_3' />
        <div className='text_4' />
        <div className='text_5' />
        <div className='text_6' />
        <div className='text_7' />
      </div>
    );
  }
}
