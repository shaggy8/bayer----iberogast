import React from 'react';
import './slide_1_56.css';
import Panel from '../../panel/panel';
import Slide from '../../slide/slide';


export default class slide_1_56 extends Slide {
  render() { 
    return (
      <div className='slide slide_1_56' ref='slide_1_56' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel className='panel'>
          <div className='panel__text panel__text_1'></div>
        </Panel>
      </div>
    );
  }
}