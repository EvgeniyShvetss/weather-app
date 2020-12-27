import React from "react"
import { useHistory } from "react-router-dom"
import { Icon } from "semantic-ui-react"
import "./backButton.scss"

const BackButton = () => {
  const history = useHistory()
  return (
    <button
      className="back-button"
      type="button"
      onClick={() => history.goBack()}
    >
      <Icon name="arrow alternate circle left outline" size="big" inverted />
    </button>
  )
}

export default BackButton
