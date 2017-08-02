import { Component } from 'react';
import './slide.css'


export default class Slide extends Component {


  constructor(){
    super()
    this.state = {slidestate: 0, popupIsVis: false, isMenuVisible: false};
    this.handleRefreshState = this.handleRefreshState.bind(this)
    this.hadlerPopupToggle = this.hadlerPopupToggle.bind(this)
  }

  componentDidMount() {
    // console.log('componentDidMount')
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
  }

  handleRefreshState(e) {
    //console.log(e.target)
    this.setState({ slidestate : e.target.dataset.state})
  }
 
  hadlerPopupToggle() {
    this.setState({popupIsVis: !this.state.popupIsVis})
  }

}