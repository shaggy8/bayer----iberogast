import React from 'react';
import Slide from '../../slide/slide.js';
import './slide_1_46.css';
import Panel from '../../panel/panel.js';


export default class slide_1_46 extends Slide {


  render() { 
    return (
      <div className='slide slide_1_46' ref='slide_1_46' data-state={this.state.slidestate}>        
        <div className='header'/>
        <div className='text'/>
        <div className='graph-coord'/>
        <div className='graph-bars'/>
        <Panel>
          <div className='text-on-panel'/>
        </Panel>
      </div>
      );
  }

  popBtnClick(){
    this.setState({slidestate: Math.abs(this.state.slidestate - 1)});
  }
}
