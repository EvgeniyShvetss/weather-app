import { GET_WEATHER_LOCATION } from "./types"

const INIT_STATE = {
  weather: {},
  isLoadWeatherLocation: false,
}

// eslint-disable-next-line import/prefer-default-export
export const weatherLocationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER_LOCATION:
      return {
        ...state,
        weather: action.payload,
        isLoadWeatherLocation: true,
      }
    default:
      return state
  }
}
