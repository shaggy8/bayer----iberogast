import React from 'react';
import './slide_2_72.css';
import Panel from '../../panel/panel.js';
import Slide from '../../slide/slide.js';

export default class slide_2_72 extends Slide {
  render() { 
    return (
      <div className='slide slide_2_72' ref='slide_2_72' data-state={this.state.slidestate}>
        <Panel>
          <div className='panel__text panel__text_1'></div>
        </Panel>
        <ul className='lists lists_1'>
          <li className='lists__list' data-link='poc_2#chapter-2'> Эффективное </li>
          <li className='lists__list' data-link='poc_2#chapter-3'> Быстродействующее </li>
          <li className='lists__list' data-link='poc_2#chapter-4'> Удобное в применении </li>
          <li className='lists__list' data-link='poc_2#chapter-5'> Безопасное и хорошо переносимое  </li>
          <li className='lists__list' data-link='poc_2#chapter-6'> Не взаимодействующее <br/>с другими препаратами </li>
        </ul> 
        <ul className='lists lists_2'>
          <li className='lists__list' data-link='poc_2#chapter-7'> Научно доказанное<br/> на высоком уровне </li>
          <li className='lists__list' data-link='poc_2#chapter-8'> Обладающее многоцелевым <br/>(мульти-таргетным) действием </li>
          <li className='lists__list' data-link='poc_2#chapter-9'> Натурального происхождения </li>
          <li className='lists__list' data-link='poc_2#chapter-10'> С возможностью назначения <br/>уже на первом приёме пациента </li>
        </ul> 
      </div>
    );
  }
}
