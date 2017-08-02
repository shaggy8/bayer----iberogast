import React from 'react';
import './slide_3_119_1.css';
import Panel from '../../panel/panel.js';
import Slide from '../../slide/slide.js';

export default class slide_3_119_1 extends Slide {
	render() { 
		return (
			<div className='slide slide_3_119_1' ref='slide_3_119_1' data-state={this.state.slidestate}>
				<div className='patient' />
				<Panel>
					<div className='panel__text panel__text_1'></div>
				</Panel>
				<ul className='lists lists_1'>
					<li className='lists__list' data-link='poc_3#chapter-2'> Натуральные препараты </li>
					<li className='lists__list' data-link='poc_3#chapter-3'> Подбор терапии на первичном приёме </li>
					<li className='lists__list' data-link='poc_3#chapter-4'> Комплексный подход в лечении пациентов </li>
					<li className='lists__list' data-link='poc_3#chapter-5'> Токсичность лекарственных препаратов </li>          
				</ul>
			</div>
		);
	}
}
