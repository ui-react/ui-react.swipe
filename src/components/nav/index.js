import style from './style';
import i18n from 'i18n';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {

    render() {
        return(
            <nav className={style['nav']}>
                <Link to="/ui-react.swipe/docs" className={style['nav__link']}>{i18n.en['nav-docs']}</Link>
                <Link to="/ui-react.swipe/demo" className={style['nav__link']}>{i18n.en['nav-demo']}</Link>
                <Link to="/ui-react.swipe/releases" className={style['nav__link']}>{i18n.en['nav-releases']}</Link>
                <Link to="/ui-react.swipe/discuss" className={style['nav__link']}>{i18n.en['nav-discuss']}</Link>
                <a href="https://github.com/ui-react/ui-react.swipe" className={style['nav__link']}>
                    <svg className={style['nav__github-icon']} viewBox="0 0 512 512">
                        <path d="m475 256c0 48-14 91-41 129-28 38-64 65-109 79-5 1-8 1-11-2-2-2-3-5-3-8l0-61c0-18-5-32-15-40 11-1 20-3 29-5 9-3 18-6 27-11 9-6 17-12 23-19 6-8 11-18 15-30 4-13 6-27 6-43 0-23-8-43-23-59 7-18 7-37-2-59-5-1-13 0-23 4-10 3-19 8-26 12l-11 7c-18-5-36-7-55-7-19 0-37 2-55 7-3-2-7-5-12-8-5-3-13-6-24-11-11-4-19-5-24-4-9 22-9 41-2 59-15 16-23 36-23 59 0 16 2 30 6 42 4 13 9 23 15 30 6 8 14 14 23 20 9 5 18 8 27 11 8 2 18 4 29 5-8 7-12 17-14 29-4 2-8 4-13 5-4 1-10 1-16 1-6 0-13-2-19-6-6-4-11-10-16-18-3-6-8-11-14-15-5-4-10-6-14-7l-5-1c-4 0-7 1-9 2-1 1-2 2-1 3 0 1 1 3 2 4 2 1 3 2 4 3l2 2c4 2 8 5 13 11 4 5 7 10 9 14l2 7c3 7 7 13 13 17 6 5 12 8 19 9 7 1 14 2 20 2 6 0 12 0 16-1l6-1c0 7 0 16 1 25 0 10 0 15 0 16 0 3-2 6-4 8-2 3-6 3-11 2-45-14-81-41-109-79-27-38-41-81-41-129 0-40 9-77 29-110 20-34 46-60 80-80 33-20 70-29 110-29 40 0 77 9 110 29 34 20 60 46 80 80 20 33 29 70 29 110z"></path>
                    </svg>
                </a>
            </nav>
        )
    }

}

export default Nav;