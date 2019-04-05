import React, {Component} from 'react';
import s from './PortfolioFull.module.css'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const PortfolioFull = (props) => {
    const {name, description, closer, mainImg} = props;
    console.log(closer);

    return (
        <div className={s.container}>
            <button className={s.closeButton} onClick={closer}>x</button>
            <div className={s.first}>
                <h2 className={s.name}>{name}</h2>
                <img className={s.mainImg} src={mainImg} alt={"img"}/>
            </div>
            <div className={s.second}>
                <p className={s.description}>{description}</p>
            </div>

            <div className={s.third}>

                {/*{this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}*/}
                {/*{console.log(project.images)}*/}
            </div>

        </div>
    );
};


export {PortfolioFull}