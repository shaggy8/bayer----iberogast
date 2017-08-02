import React, { Component } from 'react';
import './slide_1_58.css';
import Slide from '../../slide/slide';

export default class slide_1_58 extends Slide {

  render() {
    const changeState = this.handleRefreshState;
    const state = this.state.slidestate;

    const currentPopup = state == 0 ? '' : (
      <Popup state={state} changeState={changeState}/>
    )

    return (
      <div className='slide slide_1_58' ref='slide_1_58' data-state={state}>
        <div className='text'></div>

        <PopupBtn state='1' changeState={changeState}/>
        <PopupBtn state='2' changeState={changeState}/>
        <PopupBtn state='3' changeState={changeState}/>
        <PopupBtn state='4' changeState={changeState}/>
        <PopupBtn state='5' changeState={changeState}/>
        <PopupBtn state='6' changeState={changeState}/>
        <PopupBtn state='7' changeState={changeState}/>
        <PopupBtn state='8' changeState={changeState}/>
        <PopupBtn state='9' changeState={changeState}/>

        {currentPopup}

      </div>

    );
  }

}

function PopupBtn({state,changeState}) {
  const stateClass = `popup_btn popup_btn_${state}`
  return (
    <div className={stateClass} data-state={state} onClick={changeState}></div>
  )
}


class Popup extends Component {

  constructor({state,changeState}) {
    super();
    this.stateNum = state;
    this.changeState = changeState;
    this.logo = document.querySelector('.logo');
  }

  componentDidMount() {
    this.logo.style.zIndex = '-1';
  }

  componentWillUnmount() {
    this.logo.style.zIndex = '0';
  }

  render() {
    const stateClass = `state state_${this.stateNum}`;
    const descrClass = `state_descr state_${this.stateNum}_descr_`
    return (
      <div className={stateClass}>
        <div className={descrClass+'1'}></div>
        <div className={descrClass+'2'}></div>
        <div className={descrClass+'3'}></div>
        <div className='state_close' data-state='0' onClick={this.changeState}></div>
      </div>
    )
  }

}