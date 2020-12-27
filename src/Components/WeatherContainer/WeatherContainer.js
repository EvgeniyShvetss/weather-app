import React from "react"
import "./weather-container.scss"
import { BackButton } from "../index"

const WeatherContainer = ({ weather, backButton }) => (
  <div className="weather">
    <div className="weather__container">
      {backButton ? <BackButton /> : null}
      <div className="weather__city">
        {weather.name} <i className="location arrow icon" />
      </div>
      <div className="weather__temp">{Math.round(weather.main.temp)}°</div>
      <div className="weather__description">
        {weather.weather[0].description}
      </div>
    </div>
  </div>
)

export default WeatherContainer
