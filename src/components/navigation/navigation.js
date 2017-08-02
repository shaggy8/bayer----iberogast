import slideNames  from './slidenames.js'
import { hashHistory } from 'react-router';
import * as scenario  from './scenario.js';

export default class Navigation {

	constructor(chosenScenario){
		this._scenarioName = chosenScenario;
		this._currentScenario = scenario[chosenScenario];
		this._currentPatient = 'unselected';
		this._currentScenarioChapter = '';
		this._currentScenarioChapterSlides = [];
		this._currentSlide = '00';
		this._nextSlideInChapter = this._previousSlideInChapter = null;
		this.relocEvent = new Event('relocation', {
			bubbles: true,
			cancelable: true
		});
		this.animationFlag = true;
		// console.log(hashHistory.getCurrentLocation().pathname.replace('/',''))
		// console.log('init nav', this)
	}

	linkTo(link, chapter = null) {
		try{
			let slideIndex;

			if (link.indexOf('#') >= 0) {
				let patientCase = link.split('#')[0],
						patientChapter = link.split('#')[1];

				if (typeof this._currentScenario[patientCase] != 'object' ||
						!this._currentScenario[patientCase][patientChapter]){
					let error = `Scenario is unknown. Either patient (${patientCase}) or chapter (${patientChapter}) is not found in scenario.js`
					throw Error(error);
				}

				this._currentPatient = patientCase;
				this._currentScenarioChapter = patientChapter;
				this._currentScenarioChapterSlides = this._currentScenario[patientCase][patientChapter];
				this._currentSlide = this._currentScenarioChapterSlides[0];
				hashHistory.push(this._currentSlide);
			//console.log('linkTo: ',this);
			} else {
				if (link == '00') {
					this._scenarioName = null;
					this._currentScenario = {};
					this._currentPatient = 'unselected';
					this._currentScenarioChapter = '';
					this._currentScenarioChapterSlides = [];
					//this._nextSlideInChapter = this._previousSlideInChapter = null;          
				} else {
					if (chapter){
						this._currentScenarioChapter = chapter;
						this._currentScenarioChapterSlides = this._currentScenario[this._currentPatient][this._currentScenarioChapter];       
					}
				}
				this._currentSlide = link;
				if (hashHistory.getCurrentLocation().pathname.replace('/','') != link){
					hashHistory.push(link);
				}
			//console.log(this);
			}
			
			slideIndex = this._currentScenarioChapterSlides.indexOf(this._currentSlide);
			this._nextSlideInChapter = this._currentScenarioChapterSlides[slideIndex + 1];	
			this._previousSlideInChapter = this._currentScenarioChapterSlides[slideIndex - 1];

			this.relocEvent.slide = this._currentSlide;
			this.relocEvent.chapter = this._currentScenarioChapter;
			this.relocEvent.patient = this._currentPatient;
			this.relocEvent.slideName = slideNames[this.relocEvent.slide];
			document.dispatchEvent(this.relocEvent);

		} catch(e) {
			console.error(e);
		}
	}

	left() {
		//console.log('left - ',this,this._nextSlideInChapter);
		if (this._nextSlideInChapter) {
			this.linkTo(this._nextSlideInChapter)
		} else {
			let app = document.querySelector('.app');

			if (this.animationFlag){
				let that = this;

				app.style.animation = 'bounceNoRight .8s';
				this.animationFlag = false;
				setTimeout(() => {
					app.style.animation = '';
					that.animationFlag = true;
				}, 800);
			}
		}
	}

	right() {
		//console.log('right - ',this._previousSlideInChapter);
		if (this._previousSlideInChapter) {
			this.linkTo(this._previousSlideInChapter);
		} else {
			let app = document.querySelector('.app');

			if (this.animationFlag){
				let that = this;

				app.style.animation = 'bounceNoLeft .8s';
				this.animationFlag = false;
				setTimeout(() => {
					app.style.animation = '';
					that.animationFlag = true;
				}, 800);
			}
		}
	}

}
