import React, { Component } from 'react';
import './button.css'

export default class Button extends Component {
  
  onClickHandler(e){
    let button = e.target.closest('.button');
    if (button) {
      button.classList.add('active');
    }
    if (this.props.changeSlideState) {
      let currentSlide = this.props.changeSlideState;
      currentSlide.setState({slidestate: 1});
    }
    if (this.props.startClock){
      let clock = document.querySelector('.clock__text'),          
          minutes = 0, timer;      

      timer = setInterval(() => {             
        clock.innerHTML = `00:${minutes < 10? `0${minutes}` : minutes}:00`;
        minutes++;
        if (minutes > 15) {
          clearInterval(timer);          
        }
      }, 250) /* было 135*/
    }
  }  

  render() {
    return (
      <div className={`button ${this.props.icon}`} onClick={this.onClickHandler.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}

/*Button.propTypes = {
  changeSlideState: React.PropTypes.object.isRequired,
  icon: React.PropTypes.string.isRequired
}*/