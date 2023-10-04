import React from 'react'

import sun from './img/sun.png'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="main-page">
        <div>
            <div className="main-icon">
                <img src={sun} alt="jk"/>
        </div>
            
        </div>
        <div className="title-box">
            <div className="title">
                <h1>Weather</h1>
                <h5>Forecasting</h5>
            </div>
    
            <div className="main-button">
                <Link to='/weather'>
                    <button className="btn-main">Get start</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
