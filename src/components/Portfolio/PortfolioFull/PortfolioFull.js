import React, {Component} from 'react';
import s from './PortfolioFull.module.css'
import PropTypes from 'prop-types';


const PortfolioFull = (props) => {
    const {name, description, closer, mainImg} = props;
    return (
        <div className={s.container}>
            <div className={s.first}>
                <h2 className={s.name}>{name}</h2>
                <img className={s.mainImg} src={mainImg} alt={"img"}/>
            </div>
            <div className={s.description}>
                <p>{description}</p>
            </div>
            <button className={s.closeButton} onClick={closer}>x</button>
        </div>
    );
};


// class PortfolioFull extends Component {
//     render() {
//         return (
//             <div className={s.container}>
//                 <div className={s.mainImg}><img src="" alt=""/></div>
//                 <div className="description">Lorem ipsum dolor.</div>
//             </div>
//         );
//     }
// }

export {PortfolioFull}