
import React from 'react'
import './slide_1_52.css';
import Panel from '../../panel/panel.js'; 
import Slide from '../../slide/slide.js'; 
import Button from '../../button/button.js';


export default class slide_1_52 extends Slide {


  render() { 
    return (
      <div className='slide slide_1_52' ref='slide_1_52' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel>
          <div className='panel__text panel__text_1'></div>
        </Panel>

        <Button icon='drip' changeSlideState={this}>
          Иберогаст®
        </Button>

        <div className='slide_state slide_state_0'>
          <div className='state_0_descr'></div>
          <div className='stomach_1'></div>
        </div>

        <div className='slide_state slide_state_1'>
          <div className='state_0_descr'></div>
          <div className='state_1_descr'></div>
          <div className='stomach_2'></div>
        </div>

        <div className='slide_state slide_state_2'>
          <div className='state_2_descr'></div>
          <div className='stomach_3'></div>
        </div>

      </div>
    );
  }

}
