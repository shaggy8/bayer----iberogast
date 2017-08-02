import React, { Component } from 'react';

import './toggleButton.css'

export default class ToggleButton extends Component {
  constructor() {
    super()
    this.state = {
      checked : true,
      counter : 0
    };
  }

  clickHandler(e) {
    let state = +(!this.state.checked)
    e.stopPropagation()
    this.setState({
      checked: state,
      counter: ++this.state.counter
    })
    this.props.changeState({slidestate: +!state});
  }

  render() {
    let addClass = this.state.counter > 20 ? 'broken' : '';
    return (
      <div className={addClass}>
        <input id='toggle_button_checkbox' type='checkbox' readOnly checked={this.state.checked} />
        <label htmlFor='toggle_button_checkbox'  className='toggle-wrapper'>
          <div className='rect_2' onTouchStart={::this.clickHandler}></div>
          <div className='rect_1'>
            <div className='rect_1__inset'></div>
          </div>
          <div className='rect_3'></div>
          <div className='toggle_handler'>
            <div className='toggle__ellips'></div>
          </div>
        </label>
      </div>
    )
  }

}


ToggleButton.propTypes = {
  changeState: React.PropTypes.func.isRequired
}