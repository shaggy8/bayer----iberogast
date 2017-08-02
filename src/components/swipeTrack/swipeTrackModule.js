//SWIPE TRACK
var SWIPE = {    

  _handleTouchEnd(){

    let timeDiff = Date.now() - this.timeDown; 
    if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) { /*most significant*/
      if (Math.abs(this.xDiff) > this.DIFF_TRASHOLD && timeDiff < this.TIME_TRASHOLD) {
        if (this.xDiff > 0) {
          // console.log(this.xDiff, this.TIME_TRASHOLD, this.DIFF_TRASHOLD)
          this.left(); /* left swipe */
        } else {
          // console.log(this.xDiff)
          this.right(); /* right swipe */
        }
      } else {
        console.log('swipeX trashhold')
      }
    } else {
      if (Math.abs(this.yDiff) > this.DIFF_TRASHOLD && timeDiff < this.TIME_TRASHOLD) {
        if (this.yDiff > 0) {
          /* up swipe */
        } else {
          /* down swipe */
        }
      } else {
        console.log('swipeY trashhold')
      }
    }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
    this.timeDown = null;
    
  },

  _containsClassName(evntarget, classArr) {
    for (var i = classArr.length - 1; i >= 0; i--) {
      if (evntarget.classList.contains(classArr[i])) return true;
    }
  },

  _handleTouchStart(evt) {
    let touchStartTarget = evt.target;
    if (this._containsClassName(touchStartTarget, this.SWIPE_BLOCK_ELEMS)) return false;
    
    this.timeDown = Date.now();
    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
    this.xDiff = 0;
    this.yDiff = 0;
  },

  _handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) return false;

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;
  },

  init(LEFT, RIGHT){
    this.left = LEFT;
    this.right = RIGHT;
    this.SWIPE_BLOCK_ELEMS = ['swipBclock', 'handle'];
    this.xDown = null;
    this.yDown = null;
    this.xDiff = null;
    this.yDiff = null;
    this.timeDown = null;
    this.TIME_TRASHOLD = 400;
    this.DIFF_TRASHOLD = 180;
    this.bindedHandleTouchStart = this._handleTouchStart.bind(this);
    this.bindedHandleTouchMove = this._handleTouchMove.bind(this);
    this.bindedHandleTouchEnd = this._handleTouchEnd.bind(this);

    document.addEventListener('touchstart', this.bindedHandleTouchStart);
    document.addEventListener('touchmove', this.bindedHandleTouchMove);
    document.addEventListener('touchend', this.bindedHandleTouchEnd);    
  },

  kill(){
    document.removeEventListener('touchstart', this.bindedHandleTouchStart);
    document.removeEventListener('touchmove', this.bindedHandleTouchMove);
    document.removeEventListener('touchend', this.bindedHandleTouchEnd);    
  }

}

//SWIPE TRACK END
export default SWIPE