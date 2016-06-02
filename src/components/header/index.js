import style from './style';
import i18n from 'i18n';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from 'component/nav';

class Header extends Component {

    render() {
        return(
            <header className={style['header']}>
                <div className={style['header__wrapper']}>
                    <Link to="/" className={style['header__logo']}>
                        <span>{i18n.en['header-foundation']}</span>.<strong>{i18n.en['header-component']}</strong>
                    </Link>
                    <Nav />
                </div>
            </header>
        )
    }

}

export default Header;