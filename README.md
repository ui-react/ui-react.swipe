# [(UI-React) Swipe](http://ui-react.github.io/ui-react.swipe)
[![npm](https://img.shields.io/npm/l/ui-react.swipe.svg?maxAge=2592000)](https://www.npmjs.com/package/ui-react.swipe)
[![Travis](https://img.shields.io/travis/ui-react/ui-react.swipe.svg?maxAge=2592000)](https://travis-ci.org/ui-react/ui-react.swipe)
[![npm](https://img.shields.io/npm/dt/ui-react.swipe.svg?maxAge=2592000)](https://www.npmjs.com/package/ui-react.swipe)
[![npm version](https://badge.fury.io/js/ui-react.swipe.svg)](https://badge.fury.io/js/ui-react.swipe)
## Installing as a package
`npm i ui-react.swipe -S` or `npm install ui-react.swipe --save`

## Demo
<http://ui-react.github.io/ui-react.swipe>

## Development
1. `git clone git@github.com:ui-react/ui-react.swipe.git` or `git clone https://github.com/ui-react/ui-react.swipe.git`
2. `npm i` or `npm install`
3. Building `npm run build`, Watching `npm run watch`

## Getting started
```javascript
import React, { Component } from 'react';
import { render } from 'react-dom';
import Swipe from 'ui-react.swipe';

class MyApp extends Component {

    onSwipeStart = () => {
        console.info('Swipe START!');
    }

    onSwipeLeft = () => {
        console.info('Swipe LEFT!');
    }

    render() {
        return(
            <Swipe tagName="ul" axis="x" onSwipeStart={this.onSwipeStart} onSwipeLeft={this.onSwipeLeft}>
                <li>My swipe block</li>
            </Swipe>
        )
    }

}

render(<MyApp />, document.getElementById('my-app'));
```

## Properties
- (String) tagName [default: 'div']
- (String) className
- (Object) style
- (String) axis
- (Number) minDelta
- (Function) onSwipeStart
- (Function) onSwipeMove
- (Function) onSwipeEnd
- (Function) onSwipeUp
- (Function) onSwipeDown
- (Function) onSwipeLeft
- (Function) onSwipeRight