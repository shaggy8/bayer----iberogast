import React from 'react';
import './slide_2_146.css';
import Panel from '../../panel/panel';
import Button from '../../button/button';
import Slide from '../../slide/slide';


export default class slide_2_146 extends Slide {

  constructor() {
    super()
    this.state = {
      slidestate : 0 ,
      popupIsVis: false,
      currPopup: 0
     };
  }

  handlePopupButton(num) {
    this.setState({
      popupIsVis: !this.state.popupIsVis,
      currPopup: num
    })
  }

  render() {

    let currPopupClass = `popup popup_${this.state.currPopup}`;
    let popup = this.state.popupIsVis &&(<div className='popup_overlay' onClick={()=>{::this.handlePopupButton(this.state.currPopup)}}>
                                            <div className={currPopupClass} />
                                        </div>);
    return (
      <div className='slide slide_2_146' ref='slide_2_146' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <div className='text text_2'></div>

        <Panel className='panel panel_left' />
        <Panel className='panel panel_right' />

        <div className='sections_content'>
          <div className='sections_headers'></div>
          <div className='left_text'></div>
          <div className='left_text_pre'></div>
          <div className='left_text_pre_2'></div>
          <div className='right_text'></div>
        </div>

        <Button icon='drip' changeSlideState={this}>Иберогаст®</Button>

        <div className='pop_btn btn_1' onClick={()=>{::this.handlePopupButton(1)}}></div>
        <div className='pop_btn btn_2' onClick={()=>{::this.handlePopupButton(2)}}></div>
        <div className='pop_btn btn_3' onClick={()=>{::this.handlePopupButton(3)}}></div>

        {popup}

      </div>
    );
  }
}