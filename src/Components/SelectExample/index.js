import React from "react"
import "semantic-ui-css/semantic.min.css"
import { useHistory } from "react-router-dom"
import { Dropdown } from "semantic-ui-react"
import { connect } from "react-redux"
import { selectSelector } from "../Redux/actions"

const SelectExample = (props) => {
  const { state } = props
  const history = useHistory()
  const handleOnChange = (e, { value }) => {
    selectSelector()
    history.push(`/details/${value}`)
  }
  return (
    <Dropdown
      placeholder="Выберите город"
      fluid
      search
      selection
      options={state.select.select}
      onChange={handleOnChange}
    />
  )
}

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps, { selectSelector })(SelectExample)
