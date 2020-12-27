import { GET_WEATHER, GET_WEATHER_LOCATION, SELECT_SELECTED } from "./types"

export function fetchData(data) {
  return {
    type: GET_WEATHER,
    payload: data,
  }
}

export function getWeather(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response
      })
      .then((response) => response.json())
      .then((data) => dispatch(fetchData(data)))
  }
}

export function getWeatherLocation() {
  return (dispatch) => {
    const { geolocation } = navigator
    geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=6953836598f1a03d32ed677f25c7eb6d`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response
        })
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: GET_WEATHER_LOCATION,
            payload: data,
          })
        )
    })
  }
}

export function selectSelector() {
  return {
    type: SELECT_SELECTED,
  }
}
