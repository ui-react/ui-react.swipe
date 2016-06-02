import style from './style';

import React, { Component } from 'react';
import Header from 'component/header';

class Layout extends Component {

    render() {
        return(
            <div>
                <Header />
                <div>{this.props.children}</div>
            </div>
        )
    }

}

export default Layout;