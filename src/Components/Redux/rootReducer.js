import { combineReducers } from "redux"
import { weatherLocationReducer } from "./weatherLocationReducer"
// eslint-disable-next-line import/named
import { selectReducer } from "./selectReducer"
import { weatherReducer } from "./weatherReducer"

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  weatherLocation: weatherLocationReducer,
  weather: weatherReducer,
  select: selectReducer,
})
