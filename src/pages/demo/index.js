import style from './style';
import i18n from 'i18n';

import React, { Component } from 'react';
import UIReactSwipe from 'ui-react.swipe';

class Demo extends Component {

    animationTrigger = name => {
        if(this.refs[name].classList.contains(style['demo__swipe-indicator_animation'])) {
            this.refs[name].classList.remove(style['demo__swipe-indicator_animation']);
            // Animation dirty hack
            this.refs[name].offsetWidth;
        }

        this.refs[name].classList.add(style['demo__swipe-indicator_animation']);
    };

    onSwipeStart = () => {
        this.animationTrigger('swipe-start');
    };

    onSwipeMove = (x, y) => {
        if(!this.refs['swipe-move'].classList.contains(style['demo__swipe-indicator_animation'])) {
            this.refs['swipe-move'].classList.add(style['demo__swipe-indicator_animation']);
        }
    };

    onSwipeEnd = (x, y) => {
        this.animationTrigger('swipe-end');
        this.refs['swipe-move'].classList.remove(style['demo__swipe-indicator_animation']);
    };

    render() {
        return(
            <div>
                <div>
                    <UIReactSwipe
                        className={style['demo__swipe-block']}
                        onSwipeStart={this.onSwipeStart}
                        onSwipeMove={this.onSwipeMove}
                        onSwipeEnd={this.onSwipeEnd}
                    >
                        123
                    </UIReactSwipe>
                </div>
                <ul className={style['demo__swipe-indicators']}>
                    <li ref="swipe-start" className={style['demo__swipe-indicator']} data-label="onSwipeStart"></li>
                    <li ref="swipe-move" className={style['demo__swipe-indicator']} data-label="onSwipeMove"></li>
                    <li ref="swipe-end" className={style['demo__swipe-indicator']} data-label="onSwipeEnd"></li>
                </ul>
            </div>
        )
    }

}

export default Demo;