
import React from 'react'
import './slide_1_51.css';
import Panel from '../../panel/panel.js'; 
import Slide from '../../slide/slide.js'; 
import Button from '../../button/button.js';

//popup
import Popup from '../../popup/popup.js';
var popupImg = require('./img/pop_up.jpg')



export default class slide_1_51 extends Slide {

  constructor() {
    super()
    this.state = {
      slidestate: 0,
      popupIsVis: false
    }
  }

  render() {

    const popup = this.state.popupIsVis ? <Popup that={this}> <img src={popupImg}/> </Popup> : '';

    return (
      <div className='slide slide_1_51' ref='slide_1_51' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel>
          <div className='panel__text panel__text_1'></div>
        </Panel>

        <div className='state_0_descr'></div>
        <div className='stomach_1'></div>
        <div className='bubbles_1'></div>

        <div className='slide_state_1'>
          <div className='state_1_descr'></div>
          <div className='stomach_2'></div>
        </div>

        <Button changeSlideState={this} icon='drip'>Иберогаст®</Button>

        <div className='slide_state_2'>
          <div className='state_2_descr'></div>
          <div className='stomach_3'></div>
          <div className='button plus' onClick={()=>{
            this.setState({popupIsVis:true});
          }}>Подробнее</div>
        </div>

        {popup}

      </div>
    );
  }
}
