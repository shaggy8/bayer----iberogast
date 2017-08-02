import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_2_77.css';

export default class slide_2_77 extends Slide {

	render() { 
		return (
			<div className='slide slide_2_77' ref='slide_2_77' data-state={this.state.slidestate}>
				<div className='header' />
				{/*<div className='guts' />
				<div className='box' />*/}
				<div className='text_1' />
				<div className='text_2' />
				<div className='text_3' />
			</div>
		);
	}
}
