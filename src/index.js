//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as slides from './components/slides';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import Global from './components/global/global.js';
import SwipeTrack from './components/swipeTrack/swipeTrackModule.js';
import Navigation  from './components/navigation/navigation.js';
import ag from './libs/agnitio.js';
import 'react-fastclick';
import './libs/closest';
import './styles/app.css';
import './styles/animate.css';
import './styles/custom-animation.css';

ag.debug(true);


document.addEventListener('touchmove', (e) => {
	e.preventDefault()
});

// function SWIPE_LEFT () {
//   console.log('left')
//   window.nav.left()
// }

// function SWIPE_RIGHT () {
//   console.log('right')
//   window.nav.right()
// }
// =======
class App extends Component {
	constructor(){
		super();
		this.state = {refIsVis: false};
		this.state = {isMenuVisible: false};
		this.state = {scenario: 'unselected'};
		document.addEventListener('relocation', (e) => {
			this.setState({refIsVis: false});
			this.sendStats(e);
		})
		this.sendStats({slideName: 'Меню', slide:'00', patient:'home'})
		this.refBtn;
		// this.navigation;
	}

	componentDidMount(){
		this.refBtn = document.querySelector('.icon_source');
		this.logoButton = document.querySelector('.logo');
	}
// >>>>>>> d528b7028384260b302e2e5c0043c80e8ecf9cdf

	sendStats(e){
		let chapter = typeof e.patient === 'string' ? e.patient : '';
		let name = e.slideName || 'slide_' + e.slide;
		let chapterId = chapter.replace('poc_','');
		let id = e.slide;
		ag.submit.slide({name, id, chapter, chapterId});
	}

	handleClick(e) {
		let target = e.target,
				linkElement = target.closest('[data-link]'),
				chooseScenarioButton = target.closest('[data-scenario]'),
				condition = hashHistory.getCurrentLocation().pathname.replace('/','') == '00';

		if (target === this.refBtn){
			this.setState({refIsVis: !this.state.refIsVis});
		} else {
			this.setState({refIsVis: false});
		}

		if (target === this.logoButton){
			// let navigation = window.nav;
			if (condition) return false;
			this.setState({isMenuVisible: true});
		}

		if (linkElement){
			let data = linkElement.dataset;
			// window.nav.linkTo(data.link, data.chapter || null);
			this.navigation.linkTo(data.link, data.chapter || null);
			if (this.state.isMenuVisible) this.setState({isMenuVisible: false});
			if (condition) {
				let chooseScenarioArea = document.querySelector('.choose.scenario'),
						choosePatientArea = document.querySelector('.choose.patient');
				
				chooseScenarioArea.style.display = 'block';
				choosePatientArea.style.display = 'none';
			}
		}

		if (chooseScenarioButton){
			let chooseScenarioArea = document.querySelector('.choose.scenario'),
					choosePatientArea = document.querySelector('.choose.patient');

			SwipeTrack.kill();      
			this.navigation = new Navigation(chooseScenarioButton.dataset.scenario);
			SwipeTrack.init(this.navigation.left.bind(this.navigation), this.navigation.right.bind(this.navigation));

			this.setState({scenario: chooseScenarioButton.dataset.scenario});
			chooseScenarioArea.style.display = 'none';
			choosePatientArea.style.display = 'block';
		}

	}

	render() {
		return (
			<div className='app' onClick={::this.handleClick}>
				{this.props.children}
				<Global refIsVis={this.state.refIsVis} app={this} />
			</div>
		)
	}
}

const slidesArray = [];

for (let slide in slides) {
	let currSlide = slides[slide]
	slidesArray.push(
		<Route key={slide} path={slide.replace('slide_', '/')} component={currSlide}/>
	)
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Redirect from='/' to='/00' />
		<Route component={App}>
			{slidesArray}
		</Route>
	</Router>
), document.getElementById('root'))
