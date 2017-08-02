import React from 'react';
import './slide_1_53.css';
import Panel from '../../panel/panel';
import Slide from '../../slide/slide';


export default class slide_1_53 extends Slide {
  render() {
    return (
      <div className='slide slide_1_53' ref='slide_1_53' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel className='panel'>
          <div className='panel__text panel__text_1'></div>
        </Panel>

        <div className='graph_1'>
          <div className='bars_1'></div>
          <div className='graph1_stars'></div>
        </div>

      </div>
    );
  }
}