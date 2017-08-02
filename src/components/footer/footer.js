import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import * as scenario  from '../navigation/scenario.js';

export default class Footer extends Component {
  render() {
    //console.log(this.app);
    let condition = hashHistory.getCurrentLocation().pathname.replace('/','') != '00',
        navigation = this.props.app.navigation,
        chapter = 'chapter-1',
        slide;

    if (condition && navigation){
      let currentScenario = navigation._scenarioName,
          currentPatient = navigation._currentPatient,
          chapterSlides = scenario[currentScenario][currentPatient][chapter];
      
      slide = chapterSlides[chapterSlides.length - 1];
    }

    return (
      <div className='footer'>
        {this.props.children}
        <div className='footer__logo' />
        {navigation && navigation._scenarioName && <div data-link='00' className = 'icon icon_home' />}
        {condition && 
          <div className = 'icon icon_arguments'
               data-link={slide}
               data-chapter={chapter} />}
        <div className = 'icon icon_source' />
      </div>
    )    
  }
}

// <div className = 'icon icon_competitors' />
// <div className = 'icon icon_publications' />