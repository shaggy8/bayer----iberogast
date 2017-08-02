import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_17.css';

export default class slide_1_17 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_17' ref='slide_1_17' data-state={this.state.slidestate}>
        <div className='logo' />
        <div className='text' />
      </div>
    );
  }
}
