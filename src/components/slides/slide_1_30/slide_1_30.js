import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_30.css';
import Panel from '../../panel/panel.js';

export default class slide_1_30 extends Slide {

  render() { 
    return (
      <div className='slide slide_1_30' ref='slide_1_30' data-state={this.state.slidestate}>
        <div className='bg'/>
        <div className='header' />
        <div className='graph__bars'/>
        <div className='graph__values'/>
        <Panel>
          <div className='panel__text'/>
        </Panel>
        <div className='popupL' onClick={::this.popBtnClick}>
          <div className='popupL__content'/>
        </div>
        <div className='popupL__btn' onClick={::this.popBtnClick} />
      </div>
    );
  }

  popBtnClick(){
    this.setState({slidestate: Math.abs(this.state.slidestate - 1)});
  }
}
