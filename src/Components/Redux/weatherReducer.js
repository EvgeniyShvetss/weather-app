import { GET_WEATHER } from "./types"

const INIT_STATE = {
  weather: {},
  isLoadWeather: false,
}

// eslint-disable-next-line import/prefer-default-export
export const weatherReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
        isLoadWeather: true,
      }
    default:
      return state
  }
}
