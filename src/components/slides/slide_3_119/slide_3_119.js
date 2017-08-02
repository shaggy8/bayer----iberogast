import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_3_119.css';

export default class slide_3_119 extends Slide {
	render() { 
		return (
			<div className='slide slide_3_119' ref='slide_3_119' data-state={this.state.slidestate}>
				<div className='patient' />
				<div className='bg' />
				<div className='line' />
				<div className='text text_1' />
				<div className='text text_2' />
				<div className='patient' />
			</div>
		);
	}
}
