import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getWeatherLocation } from "../Redux/actions"
import { LoaderExample, WeatherContainer } from "../index"
import "./weatherLocation.scss"
import SelectItem from "../SelectExample"

// eslint-disable-next-line no-shadow
const WeatherLocation = ({ getWeatherLocation, state }) => {
  console.log(state)
  useEffect(() => {
    getWeatherLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { isLoadWeatherLocation, weather } = state
  return (
    <div className="weather">
      {isLoadWeatherLocation ? (
        <div>
          <WeatherContainer weather={weather} />
          <SelectItem />
        </div>
      ) : (
        <LoaderExample />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  state: state.weatherLocation,
})

export default connect(mapStateToProps, { getWeatherLocation })(WeatherLocation)
