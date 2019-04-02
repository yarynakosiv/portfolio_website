import React, {Component} from 'react';
// import PropTypes from 'primport React, {Component} from 'react';
import s from './fixedMenu.module.css'


class FixedMenu extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.logo}>YURI KRUKEVYTCH</div>
                <div className={s.languageOpt}>UA | EN</div>
                <div className={s.contact}>contacts</div>
            </div>
        );
    }
}

FixedMenu.propTypes = {};

export default FixedMenu;