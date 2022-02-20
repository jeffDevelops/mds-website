import React, { useCallback, useMemo, Fragment } from "react"
import PropTypes from "prop-types"
import * as RadioStyles from "./radioGroup.module.css"

export const RadioGroup = ({
  value: selected,
  options,
  columns: columnDefs,
  onChange,
}) => {
  const handleChange = useCallback(
    ({ target: { value } }) => onChange(value),
    [onChange]
  )

  const columns = useMemo(() => {
    // Return a single column if no rows per column array is provided
    if (!columnDefs) return [options]

    let currentOptionIndex = 0
    const columns = columnDefs.reduce((acc, numberOfRows) => {
      const nextColumn = options.slice(
        currentOptionIndex,
        currentOptionIndex + numberOfRows
      )

      currentOptionIndex += numberOfRows

      return [...acc, nextColumn]
    }, [])

    return columns
  }, [columnDefs, options])

  return (
    <main className={RadioStyles.radioGroupContainer}>
      {columns.map((rows, index) => (
        <section
          key={index}
          style={{ width: `calc(100% / ${columns.length})` }}
        >
          {rows.map(({ value, label, disclosure, key, id }) => (
            <Fragment key={key}>
              <label htmlFor={id}>
                <div className={RadioStyles.radioContainer}>
                  <div
                    className={`${RadioStyles.customRadioInput} ${
                      selected && selected === value ? RadioStyles.selected : ""
                    }`}
                  />

                  <input
                    className={RadioStyles.nativeRadioInput}
                    id={id}
                    onChange={handleChange}
                    checked={selected?.value === value}
                    value={value}
                    type="radio"
                  />

                  <h6>{label}</h6>
                </div>

                {disclosure ? (
                  <p className={RadioStyles.disclosure}>{disclosure}</p>
                ) : (
                  <div className={RadioStyles.noDisclosureSpacer}></div>
                )}
              </label>
            </Fragment>
          ))}
        </section>
      ))}
    </main>
  )
}

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.number),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disclosure: PropTypes.string,
    })
  ),
}

export default RadioGroup
