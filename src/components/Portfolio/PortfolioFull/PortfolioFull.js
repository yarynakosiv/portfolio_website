import React, {Component} from 'react';
import s from './PortfolioFull.module.css'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const PortfolioFull = (props) => {
    const {name, description, mainImg, images, closeExpandedPost} = props;
    console.log(closeExpandedPost);
    // let close = closeExpandedPost();
//    let close = () => {
// closeExpandedPost()
//     };

    // console.log(close);


    return (
        <div className={s.container}>
            <button className={s.closeButton} onClick={closeExpandedPost()}>x</button>
            <div className={s.first}>
                <h2 className={s.name}>{name}</h2>
                <img className={s.mainImg} src={mainImg} alt={"img"}/>
            </div>


            <div className={s.second}>
                <p className={s.description}>{description}</p>
            </div>


            <div className={s.third}>
                {
                    images.map(image =>
                        <img src={image} alt={"img"}/>
                    )
                }
            </div>

        </div>
    );
};

export {PortfolioFull}