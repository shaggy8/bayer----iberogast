import React from 'react';
import './slide_1_50.css';
import Panel from '../../panel/panel';
import ToggleButton from '../../toggleButton/toggleButton';
import Slide from '../../slide/slide';


export default class slide_1_50 extends Slide {
  render() {
    return (
      <div className='slide slide_1_50' ref='slide_1_50' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel className='panel'>
          <div className='panel__text panel__text_1'></div>
        </Panel>

        <div className='toggle'>
          <ToggleButton changeState={::this.setState}/>
        </div>

        <div className='graph graph_1'>
          <div className='arrows_1'></div>
        </div>

        <div className='slide_state_1'>
          <div className='descr_1'></div>
        </div>

        <div className='graph graph_2'>
          <div className='arrows_2'></div>
        </div>

        <div className='descr_2'></div>

      </div>
    );
  }
}