import React, { Component } from 'react';
import './global.css';
import Footer from '../footer/footer.js';
import '../footer/footer.css';
import Reference from '../reference/reference.js';
import Menu from '../menu/menu.js';

export default class Global extends Component { 
  render() {
    return (
      <div className='global'>
        <div className='bookmark' />
        <div className='logo'/>
        <Reference refIsVis={this.props.refIsVis} />
        <Footer app={this.props.app}/>
        <Menu app={this.props.app} />
      </div>
    )
  }
}
