import React from 'react'
import sun from './img/sun.png'
import {format} from 'date-fns'
import { enUS } from 'date-fns/locale';

export default function Weather({data}) {
  return (
    <div className="bg-color">
    <div className="location-date-box">
      <div className="gird">
        <h1 className="location">{data.name}</h1>
      </div>
      <div className="date">{format(new Date(),"eeee, dd LLLL", { locale: enUS })}</div>
    </div>
    <div className="weather-data-box">
      <div className="weather">
        <h2>{Math.round(data.main.temp)}°</h2>
        <div className="weather-icon-box">
          <div className="box-clound">
            <div>
              <img src={sun} alt="" className="weather-icon" />
            </div>
            <div>
              <h2 className="desc">{data.weather[0].main}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="weather-detail-box">
      <div className="weather-detail">
        <div className="box">
          <div></div>
          <p className="data">{data.visibility}</p>
          <p>Visibility</p>
        </div>
        <div className="box">
          <p className="data">{data.main.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="box">
          <p className="data">{data.wind.speed} Km/h</p>
          <p>Wind speed</p>
        </div>
      </div>
    </div>
    <div className="box-area">
      <div className="box-area-1">
        <div>
          <h3>Today</h3>
          <div className="weather-with-time-box">
            <div className="weather-with-time active">
              <p>10:00</p>
              <img src={sun} className="weather-with-time-icon" alt="" />
              <h3>22°</h3>
            </div>
            <div className="weather-with-time">
              <p>11:00</p>
              <img src={sun} className="weather-with-time-icon" alt="" />
              <h3>22°</h3>
            </div>
            <div className="weather-with-time">
              <p>12:00</p>
              <img src={sun} className="weather-with-time-icon" alt="" />
              <h3>22°</h3>
            </div>
            <div className="weather-with-time">
              <p>13:00</p>
              <img src={sun} className="weather-with-time-icon" alt="" />
              <h3>22°</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
