import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { getWeather } from "../Redux/actions"
import { LoaderExample, WeatherContainer } from "../index"

// eslint-disable-next-line no-shadow
const WeatherDetails = ({ state, getWeather }) => {
  const params = useParams()
  useEffect(() => {
    getWeather(
      `http://api.openweathermap.org/data/2.5/weather?q=${params.id}&lang=ru&units=metric&appid=6953836598f1a03d32ed677f25c7eb6d`
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { isLoadWeather, weather } = state
  console.log(weather)
  return (
    <div className="weather">
      {isLoadWeather ? (
        <WeatherContainer weather={weather} backButton />
      ) : (
        <LoaderExample />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  state: state.weather,
})

const mapDispatchToProps = {
  getWeather,
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails)
