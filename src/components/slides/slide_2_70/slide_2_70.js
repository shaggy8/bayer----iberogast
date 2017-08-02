import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_70.css';
import Slider from '../../slider/slider.js'

export default class slide_2_70 extends Slide {
  constructor(props){
    super(props)
    this.state = {
      slidestate : '1' , sliderValue: 0 
    }
    this.handlClickLabel = this.handlClickLabel.bind(this);
  }

  handlClickLabel (value) {
      this.setState( {slidestate : '1' , sliderValue: value } )
  }
  render() { 
    return (
      <div className='slide slide_2_70' ref='slide_2_70' data-state={this.state.slidestate}>
        <div className='text'></div>
        <Slider
          className='horizontal-slider'
          defaultValue={[0]}
          withBars
          orientation={'horizontal'}
          onChange={this.handlClickLabel}
         />
        <div className='slider-value noUi-tooltip'>{this.state.sliderValue}%</div>
      </div>
    );
  }
}