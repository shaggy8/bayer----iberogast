import React, { Component } from 'react';
import scenario from '../navigation/scenario.js';
import './menu.css';

export default class Menu extends Component {

  constructor(){
    super();
    this.state = {
      chapter: 'chapter-1',
      onMenuItemClick: false
    };
    this.menuItemNames = {
      fullScenario: [
        'Эффективное',
        'Быстродействующее',
        'Удобное в применении',
        'Безопасное и хорошо переносимое',
        'Не взаимодействующее с другими препаратами',
        'Научно доказанное на высоком уровне',
        'Обладающее многоцелевым (мульти-таргетным) действием',
        'Натурального происхождения',
        'С возможностью назначения уже на первом приёме пациента'
      ],
      shortScenario: [
        'Натуральные препараты',
        'Подбор терапии на первичном приёме',
        'Комплексный подход в лечении пациентов',
        'Токсичность лекарственных препаратов'
      ]
    };

  }

  componentDidUpdate(){
    let activeMenuItem = document.querySelector('.menu-list__item.active');
    const marginTop = 40,
          menuItemHeight = 75,
          halfArrowHeight = 11;

    if (activeMenuItem){
      let menuItems = activeMenuItem.parentElement.children,
          arrow = document.querySelector('.menu-box .arrow'),
          activeMenuItemPosition = Array.prototype.indexOf.call(menuItems, activeMenuItem) + 1;

      arrow.style.display = 'block';
      arrow.style.top = `${((activeMenuItemPosition * menuItemHeight) - menuItemHeight / 2) - halfArrowHeight + marginTop}px`;
    }
    
  }

  onMenuItemClick(e){
    let target = e.target;        

    if (target.classList.contains('menu-list__item')) {
        this.setState({chapter: target.dataset.chapter});
        this.setState({onMenuItemClick: true});
    }

  }

  onCloseButtonClick(){
    let app = this.props.app;
    app.setState({isMenuVisible: false});
    this.setState({onMenuItemClick: false});
  }

  render() {    
    let app = this.props.app,
        visible = app.state.isMenuVisible,        
        chosenScenario = app.state.scenario,        
        getColunmNumber = (slidesAmount) => {
          let columnNumber = 1;

          if (slidesAmount > 1){
            columnNumber = Math.ceil(slidesAmount / 6) + 1;
            if (columnNumber > 4) columnNumber = 4;
          }

          return columnNumber;
        };

    if (visible) {
      let navigation = app.navigation,
          patient = navigation._currentPatient,
          chapter = navigation._currentScenarioChapter,
          slideSet = navigation._currentScenarioChapterSlides,
          slidesArray = [],
          menuItems;

      if (this.state.onMenuItemClick){
        chapter = this.state.chapter;
        slideSet = scenario[chosenScenario][patient][chapter];
        slidesArray = slideSet.map((item, index) => {
          return (<div key={index}
                       className={`slide-preview col-${getColunmNumber(slideSet.length)} s${item}`}
                       data-link={item}
                       data-chapter={chapter} />)
        })
      } else {
        slidesArray = slideSet.map((item, index) => {
          return (<div key={index}
                       className={`slide-preview col-${getColunmNumber(slideSet.length)} s${item}`}
                       data-link={item}
                       data-chapter={chapter} />)
        })      
      }

      menuItems = this.menuItemNames[chosenScenario].map((item, index) => {
        return (
          <li className={`menu-list__item ${chapter == `chapter-${index + 2}`? 'active' : ''}`}
              data-chapter={`chapter-${index + 2}`}
              key={(index + 2) * 10}>
              {item}
          </li>
        )
      });

      return(
          <div className='menu-wrapper'>
            <div className='preview-box'>
              {slidesArray}
            </div>
            <div className='menu-box' onClick={::this.onMenuItemClick}>
              <ul className='menu-list'>              
                {menuItems}
              </ul>
              <div className='arrow' />              
            </div>
            <div className='close-button' onClick={::this.onCloseButtonClick}/>
          </div>
        )
    } else {
      return false;
    }
    
  }
}