import React from 'react';
import './slide_1_29.css';
import Panel from '../../panel/panel';
import ToggleButton from '../../toggleButton/toggleButton';
import Slide from '../../slide/slide';


export default class slide_1_29 extends Slide {

  popBtnClick(){
    let popupL = document.querySelector('.popupL');
    popupL.classList.toggle('popupL_show');
  }

  render() { 
    return (
      <div className='slide slide_1_29' ref='slide_1_29' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel className='panel'>
          <div className='panel__text panel__text_1'></div>
        </Panel>

        <div className='toggle'>
          <ToggleButton changeState={::this.setState} />
        </div>

        <div className='slide_state slide_state_0'>
          <div className='state_1_descr'></div>
          <div className='graph_1'>
            <div className='bars_1'></div>
            <div className='graph1_stars'></div>
            <div className='graph1_pin'></div>
          </div>
        </div>

        <div className='slide_state slide_state_1'>
          <div className='state_2_descr'></div>
          <div className='graph_2'>
            <div className='bars_2'></div>
            <div className='graph2_stars'></div>
            <div className='graph2_pin'></div>
          </div>
        </div>

        <div className='popupL' onClick={this.popBtnClick}>
          <div className='popupL__content'/>
        </div>
        <div className='popupL__btn' onClick={this.popBtnClick}/>

      </div>
    );
  }
}