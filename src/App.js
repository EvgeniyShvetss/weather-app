import React from "react"
import { Route } from "react-router-dom"
import WeatherLocation from "./Components/WeatherLocation"
import "./app.scss"
import WeatherDetails from "./Components/WeatherDetails"

const App = () => (
  <div className="app">
    <div className="app__container">
      <div className="app__block">
        <Route exact path="/" component={WeatherLocation} />
        <Route exact path="/details/:id" component={WeatherDetails} />
      </div>
    </div>
  </div>
)

export default App
