import React, { Component, PropTypes } from 'react';

class Swipe extends Component {

    static propTypes = {
        tagName         : PropTypes.string,
        className       : PropTypes.string,
        style           : PropTypes.object,

        axis            : PropTypes.string,
        minDelta        : PropTypes.number,

        onSwipeStart    : PropTypes.func,
        onSwipeMove     : PropTypes.func,
        onSwipeEnd      : PropTypes.func,

        onSwipeUp       : PropTypes.func,
        onSwipeDown     : PropTypes.func,
        onSwipeLeft     : PropTypes.func,
        onSwipeRight    : PropTypes.func
    };

    static defaultProps = {
        tagName : 'div',
        minDelta: 65
    };

    get isSwipeHandler() {
        return this.props.onSwipeUp || this.props.onSwipeDown || this.props.onSwipeLeft || this.props.onSwipeRight;
    }

    onTouchStart = e => {
        if(e.changedTouches.length == 1 && !this._started && !this._detecting) {
            this._detecting = true;

            this._touch = e.changedTouches[0];
            this._positionStart = {
                x : this._touch.pageX,
                y : this._touch.pageY
            };
        }
    };

    onTouchMove = e => {
        if(this._detecting || this._started) {
            if(this._detecting && this.validateTouch(e.changedTouches)) {
                let x = this._positionStart.x - e.changedTouches[0].pageX,
                    y = this._positionStart.y - e.changedTouches[0].pageY;

                switch(this.props.axis) {
                    case 'x':
                        if(Math.abs(x) >= Math.abs(y)) {
                            e.preventDefault();

                            this._started = true;
                            this.onSwipeStart();
                        }
                        break;
                    case 'y':
                        if(Math.abs(x) <= Math.abs(y)) {
                            e.preventDefault();

                            this._started = true;
                            this.onSwipeStart();
                        }
                        break;
                    default:
                        e.preventDefault();

                        this._started = true;
                        this.onSwipeStart();
                }

                this._detecting = false;
            }

            if(this._started && this.validateTouch(e.changedTouches)) {
                e.preventDefault();

                let x = this._positionStart.x - e.changedTouches[0].pageX,
                    y = this._positionStart.y - e.changedTouches[0].pageY;

                this.onSwipeMove(x, y);

                this._positionDelta = {
                    x,
                    y
                }
            }
        }

    };

    onTouchComplete = e => {
        if(this._started && this.validateTouch(e.changedTouches)) {
            e.preventDefault();

            this
                .swipeAction()
                .onSwipeEnd()
                .clean();
        }

        return this;
    };

    onTouchEnd = this.onTouchComplete;
    onTouchCancel = this.onTouchComplete;

    onSwipeStart = () => {
        this.props.onSwipeStart && this.props.onSwipeStart();

        return this;
    };

    onSwipeMove = (x, y) => {
        this.props.onSwipeMove && this.props.onSwipeMove(x, y);

        return this;
    };

    onSwipeEnd = () => {
        this.props.onSwipeEnd && this.props.onSwipeEnd();

        return this;
    };

    swipeAction = () => {
        if(this.isSwipeHandler) {
            if(!this.props.axis || this.props.axis == 'x') {
                if(this.props.axis == 'x') {
                    this.swipeX();
                } else {
                    if(Math.abs(this._positionDelta.x) > Math.abs(this._positionDelta.y)) {
                        this.swipeX();
                    }
                }
            }

            if(!this.props.axis || this.props.axis == 'y') {
                if(this.props.axis == 'y') {
                    this.swipeY();
                } else {
                    if(Math.abs(this._positionDelta.y) > Math.abs(this._positionDelta.x)) {
                        this.swipeY();
                    }
                }
            }
        }

        return this;
    };

    swipeY = () => {
        if(this.props.minDelta < Math.abs(this._positionDelta.y)) {
            if (this._positionDelta.y > 0) {
                this.props.onSwipeUp && this.props.onSwipeUp();
            } else if (this._positionDelta.y < 0) {
                this.props.onSwipeDown && this.props.onSwipeDown();
            }
        }
    };

    swipeX = () => {
        if(this.props.minDelta < Math.abs(this._positionDelta.x)) {
            if(this._positionDelta.x > 0) {
                this.props.onSwipeLeft && this.props.onSwipeLeft();
            } else if(this._positionDelta.x < 0) {
                this.props.onSwipeRight && this.props.onSwipeRight();
            }
        }
    };

    clean = () => {
        this._positionStart = null;
        this._positionDelta = null;
        this._started = false;

        return this;
    };

    validateTouch = touches => {
        let result = false;

        for(let i = 0; i < touches.length; i++) {
            if(this._touch.identifier == touches[i].identifier) {
                result = true;
                break;
            }
        }

        return result;
    };

    render() {
        return(
            <this.props.tagName className={this.props.className} style={this.props.style} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd} onTouchCancel={this.onTouchCancel}>
                {this.props.children}
            </this.props.tagName>
        )
    }

}

export default Swipe;