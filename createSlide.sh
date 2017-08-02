#!/bin/bash

JSTMP="
import React from 'react';
import Slide from '../../slide/slide.js';
import './$1.css';



export default class $1 extends Slide {


  render() { 
    return (
      <div className='slide $1' ref='$1' data-state={this.state.slidestate}>
      </div>
    );
  }
}"
CSSTMP=".$1{}"

mkdir src/components/slides/$1
touch src/components/slides/$1/$1.js && touch src/components/slides/$1/$1.css
mkdir src/components/slides/$1/img -p
echo "$JSTMP" >>  ./src/components/slides/$1/$1.js
echo "$CSSTMP" >>  ./src/components/slides/$1/$1.css