import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_35.css';
import Panel from '../../panel/panel.js';


export default class slide_1_35 extends Slide {


  render() { 
    return (
      <div className='slide slide_1_35' ref='slide_1_35' data-state={this.state.slidestate}>
        <div className='bg'/>
        <div className='header' />
        <div className='graph__bars'/>
        <div className='graph__stars'/>
        <Panel>
          <div className='panel__text'/>
        </Panel>
        <div className='popupL' onClick={this.popBtnClick.bind(this)}>
          <div className='popupL__content'/>
        </div>
        <div className='popupL__btn' onClick={this.popBtnClick.bind(this)} />
      </div>
      );
  }

  popBtnClick(){
    this.setState({slidestate: Math.abs(this.state.slidestate - 1)});
  }
}
