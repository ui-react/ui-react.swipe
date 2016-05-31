import style from './style';

import React, { Component } from 'react';

/*
import Header from 'component/header';
import Navigation from 'component/navigation';
*/

class Layout extends Component {

    render() {
        return(
            <div>
                {/*
                <Header />
                <Navigation />
                */}
                <div>{this.props.children}</div>
            </div>
        )
    }

}

export default Layout;