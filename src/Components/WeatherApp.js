import React from 'react'
import Weather from './Weather.css'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import serch_icon from '../Assets/search.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'


function WeatherApp() {
    let api_key = '7d6441aa4b105cf93469f32e60002ae7'
  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search' />
            <div className="serch-icon">
                <img src={serch_icon} className='icon' alt="" />
            </div>
        </div>
        <div className="weather-img">
            <img src={clear_icon} className='icon' alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} className='icon' alt="" />
                <div className="data">
                    <div className="humidity-percentage">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} className='icon' alt="" />
                <div className="data">
                    <div className="wind-speed">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp