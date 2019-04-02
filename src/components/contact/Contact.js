import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css'

class Contact extends Component {
    render() {
        return (
            <div className={s.container}>
                <input className={s.input} placeholder={"name"} type="text"/>
                <input className={s.input} placeholder={"mail"} type="text"/>
                <input className={s.input} placeholder={"message"} type="textarea"/>
                <div className={s.bottom}>
                    <button className={s.button}>send</button>
                    <div>
                        <h3>+380 926 788 906</h3>
                        <h3>krukevych@gmail.com</h3>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;