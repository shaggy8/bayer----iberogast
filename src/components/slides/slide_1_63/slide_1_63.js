import React from 'react';
import './slide_1_63.css';
import Panel from '../../panel/panel';
import Slide from '../../slide/slide';


export default class slide_1_63 extends Slide {
  render() { 
    return (
      <div className='slide slide_1_63' ref='slide_1_63' data-state={this.state.slidestate}>
        <div className='header' />
        <div className='text text_1'></div>
        <Panel className='panel'>
          <div className='panel__text panel__text_1'></div>
        </Panel>
        <div className='stomach' />
        <div className='pointer_1' />        
        <div className='pointer_2' />        
        <div className='pointer_3' />        
        <div className='pointer_4' />        
        <div className='pointer_5' />        
        <div className='pointer_6' />        
        <div className='pointer_7' />        
      </div>
    );
  }
}