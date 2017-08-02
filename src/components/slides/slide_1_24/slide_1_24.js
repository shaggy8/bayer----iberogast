import React from 'react';
import './slide_1_24.css';
import Slide from '../../slide/slide';

import Panel from '../../panel/panel.js';

export default class slide_1_24 extends Slide {

  render() {
    return (
      <div className='slide slide_1_24' ref='slide_1_24' data-state='0'>
        <Panel>
          <div className='panel__text panel__text_1'></div>
        </Panel>
        <div className='text_2'></div>
        <div className='flower_shadow'></div>
        <div className='right_img'></div>
      </div>
    );
  }
}