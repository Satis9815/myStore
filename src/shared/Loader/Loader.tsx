import React from 'react'
import "./loader.scss"


const Loader = ({text}:{text: string}) => {
    return (
      <div className="loader__bg">
        <div className="loader">
          <div className="ring">
            <div />
            <div />
            <div />
            <div />
          </div>
          <p className="loading__text">{text}</p>
        </div>
      </div>
    );
  };
  

export default Loader
