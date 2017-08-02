
import React from 'react';
import Slide from '../../slide/slide.js';
import Panel from '../../panel/panel.js';
import Button from '../../button/button.js';
import './slide_1_10.css';



const MATRIX = {
  'mech'  : ['narushenie' , 'viscer' , 'giper' , 'gipo' , 'vospal'],
  'epiga' : [   true      ,   true   ,  false  ,  true  ,   true  ],
  'abdom' : [   false     ,   true   ,  true   ,  false ,   false ],
  'disco' : [   true      ,   true   ,  true   ,  true  ,   true  ],
  'ranee' : [   false     ,   true   ,  false  ,  true  ,   false ],
  'perep' : [   false     ,   true   ,  false  ,  true  ,   false ],
  'toshn' : [   false     ,   true   ,  true   ,  true  ,   false ],
  'otpyg' : [   false     ,   true   ,  true   ,  true  ,   false ],
  'rvota' : [   false     ,   true   ,  true   ,  true  ,   false ],
  'relux' : [   true      ,   false  ,  false  ,  true  ,   false ]

}


function checkboxUpdate (currInput , currStateInput) {
  // console.log('currInput', currInput , 'currStateInput', currStateInput , currInput == currStateInput);

  if(SIMPT[currStateInput]) {

    if(currInput == currStateInput) {
      return true;
    }

    for (let i = MATRIX[currStateInput].length - 1; i >= 0; i--) {
      if (MATRIX['mech'].indexOf(currInput)!= -1) {
        return MATRIX[currStateInput][MATRIX['mech'].indexOf(currInput)];
      }
    }


  } else if (MECH[currStateInput]) {

    if(currInput == currStateInput) {
      return true;
    }

    let indexMech = MATRIX['mech'].indexOf(currStateInput)
    if(SIMPT[currInput]) {
      return MATRIX[currInput][indexMech]
    }

  } else {
    console.log('checkboxUpdate err')
  }
}


const SIMPT = {
  'epiga' : 'Эпигастральная боль',
  'abdom' : 'Абдоминальные спазмы', 
  'disco' : 'Дискомфорт за грудиной',
  'ranee' : 'Раннее насыщение',
  'perep' : 'Переполнение, метеоризм, запоры', 
  'toshn' : 'Тошнота',
  'otpyg' : 'Отрыжка',
  'rvota' : 'Рвота',
  'relux' : 'Рефлюкс кислотного содержимого / изжога' 
}

const MECH = { 
  'narushenie' : 'Нарушения секреции кислоты',
  'viscer'     : 'Висцеральная гиперчувствительность',
  'giper'      : 'Гиперкинез', 
  'gipo'       : 'Гипокинез', 
  'vospal'     : 'Воспаление'
}



class MyInput extends React.Component {


  render(){

  const id = `input_1_10_${this.props.value}`
  // const checked = ``


    return (
      <div className=''>
        <input 
          name={this.props.value} 
          id={id} type='checkbox'  
          checked={checkboxUpdate(this.props.value, this.props.state.lastInputClicked)} 
          onChange={()=>{}}
        />
        <label htmlFor={id}>
          <div className='checkbox-label'>
            <div className='checkbox__ellips'></div>
          </div>
          {this.props.children}
        </label>
      </div>
    )

  }

} 

export default class slide_1_10 extends Slide {

  constructor(){
    super()
    this.state  = {
      activeTitle: 'simptomy',
      lastInputClicked: 'epiga',
      slidestate: 0,
      smallPopupIsShow: false
    }


  }


  onChangeHandle(e){
    console.log(e.currentTarget.classList[0])
    this.setState({
      lastInputClicked:e.target.name,
      activeTitle: e.currentTarget.classList[0]
    })
  }

  toggleSmallPopup(){
    this.setState({smallPopupIsShow: !this.state.smallPopupIsShow})
  }

  render() { 
    let arr1 = [];

    for(let el in SIMPT) {
      arr1.push( <MyInput value={el} key={el}  state={this.state}> <p> {SIMPT[el]} </p> </MyInput> )
    }

    let arr2 = [];

    for(let el in MECH) {
      arr2.push( <MyInput value={el} key={el}  state={this.state}> <p> {MECH[el]} </p> </MyInput> )
    }

    return (
      <div className='slide slide_1_10' ref='slide_1_10'  data-state={this.state.slidestate}>
          <Panel className='panel'>
            <form className='simptomy' onChange={this.onChangeHandle.bind(this)}>
              {arr1}
            </form>
          </Panel>

        <Panel className='panel'> 
          <form className='mech' onChange={this.onChangeHandle.bind(this)}>
            {arr2}
          </form>
        </Panel>

        <div className='text_1'></div>
        <div className='panel-title panel-title_1' data-active={this.state.activeTitle == 'simptomy'}></div>
        <div className='panel-title panel-title_2' data-active={this.state.activeTitle == 'mech'}></div>
        <Button icon='drip' changeSlideState={this} children={'Иберогаст®'}/>
        {this.state.smallPopupIsShow ? <div className='popup-wrapper' onClick={::this.toggleSmallPopup}>
          <div className='small-popup'>
            <div className='small-popup__text'></div>
          </div>
          </div> : ''}
        <div className='btn_pluse' data-active={this.state.smallPopupIsShow} onClick={::this.toggleSmallPopup}></div>
      </div>
    );
  }
}
