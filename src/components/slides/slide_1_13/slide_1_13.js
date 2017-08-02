
import React from 'react';
import Slide from '../../slide/slide.js';
import Panel from '../../panel/panel.js'; 
import './slide_1_13.css';

function MyInput ({value , children}) {

  const id = `input_1_13_${value}`
  const checked = value == 1

  return (
    <div className=''>
      <input name='input_1_13' id={id} type='radio' value={value} defaultChecked={checked} />
      <label htmlFor={id}>
        <div className='checkbox-label'>
          <div className='checkbox__ellips'></div>
        </div>
        {children}
      </label>
    </div>
  )

}


export default class slide_1_13 extends Slide {

  constructor(props){
    super(props)
    this.state.slidestate = 1
  }

  setSlideState(e){
    let value = e.target.value
    console.log(e.target)
    this.setState({slidestate: value})
  }

  render() { 
    return (
      <div className='slide slide_1_13' ref='slide_1_13' data-state={this.state.slidestate}>
        <div className='text text_1'></div>
        <Panel>
          <div className='wrapper'>
            <div className='panel__text panel__text_1'></div>
            <div className='panel__text panel__text_2'></div>
            <div className='panel__text panel__text_3'></div>
            <div className='panel__text panel__text_4'></div>
            <div className='panel__text panel__text_5'></div>
          </div>
        </Panel>
        <form className='slide_1_13-form' onChange={this.setSlideState.bind(this)}>

          <MyInput value='1'>
            <p>6 контролируемых рандомизи-<br/>рованных двойных слепых<br/>исследований</p>
          </MyInput>

          <MyInput value='2'>
            <p>12 частично открытых<br/>клинических исследований<br/>5 постмаркетинговых<br/>исследований</p>
          </MyInput>

          <MyInput value='3'>
            <p>Ретроспективное когортное<br/>исследование</p>
          </MyInput>

          <MyInput value='4'>
            <p>Ретроспективное наблюдение<br/>с детьми старше 12 лет</p>
          </MyInput>

          <MyInput value='5'>
            <p>Пациенты, принимавшие<br/>Иберогаст® после выхода<br/>его на рынок</p>
          </MyInput>


        </form>

      </div>
    );
  }

}
