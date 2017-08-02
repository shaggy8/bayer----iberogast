import React from 'react';
import './slide_1_41.css';
import Panel from '../../panel/panel';
import ToggleButton from '../../toggleButton/toggleButton';
import Slide from '../../slide/slide';

export default class slide_1_41 extends Slide {
  
  popBtnClick(){
    let popupL = document.querySelector('.popupL');
    popupL.classList.toggle('popupL_show');
  }

  render() {
    return (
      <div className='slide slide_1_41' ref='slide_1_41' data-state={this.state.slidestate}>
        <div className='header'></div>
        <div className='text_1'/>
        <div className='graph-coord'/>        
        <div className='graph-stars-1'/>        
        <div className='graph-stars-2'/>        
        <div className='graph-lines-1'/>
        <div className='graph-lines-2'/>
        <Panel className='panel'>
          <div className='text-on-panel'></div>
        </Panel>
        <div className='toggle'>
          <ToggleButton changeState={this.setState.bind(this)}/>
        </div>                
        <div className='popupL' onClick={this.popBtnClick}>
          <div className='popupL__content'/>
        </div>
        <div className='popupL__btn' onClick={this.popBtnClick}/>

      </div>
    );
  }
}