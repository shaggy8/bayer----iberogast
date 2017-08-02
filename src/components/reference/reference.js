import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import './reference.css';
import {REFERENCE, SLIDE_REFERENCE} from './reference-data.js';
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';


export default class Reference extends Component {

  constructor(arg){
    super(arg);
    this.REFERENCE = REFERENCE.refs;
    this.SLIDE_REFERENCE = SLIDE_REFERENCE;
    this.slideName = hashHistory.getCurrentLocation().pathname.replace('/','');
    this.currRef = this.SLIDE_REFERENCE[this.slideName];
    this.currRefsHtml = '';
  }

  componentDidMount() {
    this.refresh();
  }

  refresh(){
    let refBtn  = document.querySelector('.icon_source');
    let ref = document.querySelector('.reference');
    let currRefsHtml = '';
    const MAX_LIST_SIZE = 12;
    if (ref){
      ref.classList.toggle('reference_show', false);
      ref.style.height = 'initial';
    }

    if (refBtn){
      this.slideName = hashHistory.getCurrentLocation().pathname.replace('/','');
      this.currRef = this.SLIDE_REFERENCE[this.slideName];
      if(typeof this.currRef == 'string'){
        this.currRef = this.SLIDE_REFERENCE[this.currRef];
      }
      if(this.currRef === undefined || !typeof this.currRef == 'object'){
        refBtn.style.opacity = '0.2';
        refBtn.style.pointerEvents = 'none';
        ref.style.display='none';
      } else {
        refBtn.style.opacity = '1';
        refBtn.style.pointerEvents = 'auto';
        ref.style.display='block';
        this.currRef.forEach(ref=>{
          const [refId,prefix] = ref.split('|');
          let currRefP = `<p>${prefix+this.REFERENCE[refId]}</p>`;
          currRefsHtml += currRefP;
        });
        if (this.currRef.length >=  MAX_LIST_SIZE){
          ref.style.height = '75%';
        }
        return currRefsHtml;
      }
    }
    return currRefsHtml;
  }

  render() {
    let options = {
        mouseWheel: true,
        scrollbars: 'custom'
      };
    return (
      <div className={this.props.refIsVis ? 'reference reference_show' : 'reference' }>
       <ReactIScroll iScroll={iScroll} options={options} >
          <div dangerouslySetInnerHTML={{__html: this.refresh()}}>
          </div>
        </ReactIScroll>
      </div>
    )
  }
}