import React, {Component} from 'react';
import s from './about.module.css'
import PropTypes from 'prop-types';

class About extends Component {
    render() {
        return (
            <div className={s.container}>
                <h2 className={s.aboutText}>Lorem ipsum dolor sit amet, Consequatur facilis
                    nam voluptas? Culpa, excepturi, reiciendis?
                    Ab alias at beatae dicta earum eos ipsa maxime nulla possimus
                    quo repellat, soluta?</h2>
            </div>
        );
    }
}

About.propTypes = {};

export default About;