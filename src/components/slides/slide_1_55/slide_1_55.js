import React from 'react';
import './slide_1_55.css';
import Panel from '../../panel/panel';
import ToggleButton from '../../toggleButton/toggleButton';
import Slide from '../../slide/slide';


export default class slide_1_55 extends Slide {
  render() {
    return (
      <div className='slide slide_1_55' ref='slide_1_55' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel className='panel'>
          <div className='panel__text panel__text_1'></div>
        </Panel>

        <div className='toggle'>
          <ToggleButton changeState={this.setState.bind(this)}/>
        </div>

        <div className='slide_state slide_state_0'>
          <div className='graph_1'>
            <div className='bars_1'></div>
            <div className='graph1_stars'></div>
          </div>
        </div>

        <div className='slide_state slide_state_1'>
          <div className='graph_2'>
            <div className='bars_2'></div>
            <div className='graph2_stars'></div>
          </div>
        </div>

      </div>
    );
  }
}