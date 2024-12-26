import React from 'react';
import './card.scss';

const Card = ({title, info1, info2, info3, info4, image, showButton, buttonText}) => {
    return (
        <div className="card">
            <img src={image} alt="Gif" className="card-image"/>
            <div className="card-text">
                <div className="card-title">{title}</div>
                <div className="card-info">{info1}</div>
                <div className="card-info">{info2}</div>
                <div className="card-info">{info3}</div>
                <div className="card-info">{info4}</div>
                {showButton && (
                    <button className="card-button">{buttonText}</button>
                )}
            </div>
        </div>
    );
};

export default Card;