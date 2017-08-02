import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_31.css';
import Panel from '../../panel/panel.js';
import ToggleButton from '../../toggleButton/toggleButton.js';

export default class slide_1_31 extends Slide {

  lensHandle(e){
    let target = e.target,        
        lens = document.querySelector('.lens');

    if (target.classList.contains('lens') && !target.classList.contains('active')){
      lens.classList.toggle('active');      
      return;
    }

    if (lens.classList.contains('active')){
      let popup = document.querySelector('.popupL'),
          reference = document.querySelector('.reference'),
          popupCase = target.classList.contains('popupL__btn') || popup.classList.contains('popupL_show'),
          referenceCase = target.classList.contains('icon_source') || reference.classList.contains('reference_show');
      if (popupCase || referenceCase) return;
      lens.classList.toggle('active');
    }
  }

  lensClick(){    
    let lens = document.querySelector('.lens');
    lens.classList.toggle('active');
  }

  popBtnClick(){    
    let popupL = document.querySelector('.popupL');
    popupL.classList.toggle('popupL_show');
  }

  render() { 
    return (
      <div className='slide slide_1_31' ref='slide_1_31' data-state={this.state.slidestate}>
        <div className='bg bg_2'>
          <div className='layer_2'/>
          <div className='bars_2'/>
        </div>
        <div className='bg bg_1'>
          <div className='layer_1'/>
          <div className='bars_1'/>
          <div className='lens' onClick={this.lensClick}>
            <div className='lens_popup'>
              <div className='lens__graph'/>
            </div>
          </div>
        </div>
        <div className='header' />        
        <Panel className='panel'>
          <div className='panel__text_1'/>
          <div className='panel__text_2'/>          
        </Panel>

        <div className='toggle'>
          <ToggleButton changeState={::this.setState} />
        </div>


        <div className='popupL' onClick={this.popBtnClick}>
          <div className='popupL__content'/>
        </div>
        <div className='popupL__btn' onClick={this.popBtnClick}/>

      </div>
    );
  }  
}
