import React from "react"
import PropTypes from "prop-types"
import * as CheckboxStyles from "./checkbox.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

/**
 * @description An MDS-branded checkbox component
 * @usage
 * ```
 * <Checkbox checked={boolean} value={string} onChange={() => SetStateAction<boolean>}>My Label Here</Checkbox>
 * ```
 */
const Checkbox = ({ checked, onChange, children, value }) => {
  return (
    <label className={CheckboxStyles.checkboxContainer}>
      <div
        className={`${CheckboxStyles.customCheckboxInput} ${
          checked ? CheckboxStyles.checked : ""
        }`}
      >
        <FontAwesomeIcon icon={faCheck} />
      </div>

      <input
        className={CheckboxStyles.nativeCheckbox}
        onChange={onChange}
        checked={checked}
        type="checkbox"
        value={value}
      />

      <h5>{children}</h5>
    </label>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox
