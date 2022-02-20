import { useLayoutEffect, useState } from "react"
import deepEqual from "lodash/isEqual"

/**
 * CONFIG
 */

export const MOBILE_MAX_WIDTH = 600
export const TABLET_MAX_WIDTH = 800

export const MOBILE_COLUMN_LAYOUT = [Infinity] // All rows are full width
export const TABLET_COLUMN_LAYOUT = [6, Infinity] // First column is 6 radio buttons, last is all the rest
export const DESKTOP_COLUMN_LAYOUT = [4, 4, Infinity] // 4 radio buttons, 4 radio buttons, all the rest

/**
 * RADIO GROUP RESPONSIVE LAYOUT
 *
 * A custom hook for calculating the number of columns to use for the radio button group
 */
export const useRadioButtonLayout = () => {
  // Maintain state for the column and row configuration
  const [regionRadioButtonColumns, setRegionRadioButtonColumns] =
    useState(MOBILE_COLUMN_LAYOUT)

  const [viewportWidth, setViewportWidth] = useState(0)

  useLayoutEffect(() => {
    // Configure the number of rows in each column, based on the viewport width
    const handleResize = () => {
      setViewportWidth(window.innerWidth)

      switch (true) {
        case window.innerWidth <= MOBILE_MAX_WIDTH:
          if (!deepEqual(regionRadioButtonColumns, MOBILE_COLUMN_LAYOUT))
            setRegionRadioButtonColumns(MOBILE_COLUMN_LAYOUT)
          return
        case window.innerWidth < TABLET_MAX_WIDTH &&
          window.innerWidth > MOBILE_MAX_WIDTH:
          if (!deepEqual(regionRadioButtonColumns, TABLET_COLUMN_LAYOUT))
            setRegionRadioButtonColumns(TABLET_COLUMN_LAYOUT)
          return
        case window.innerWidth >= TABLET_MAX_WIDTH:
          if (!deepEqual(regionRadioButtonColumns, DESKTOP_COLUMN_LAYOUT))
            setRegionRadioButtonColumns(DESKTOP_COLUMN_LAYOUT)
          return
        default:
          console.error("Unhandled viewport size")
      }
    }

    // Run the column config on component mount
    handleResize()

    // Listen for resize events and clean up if unmounted
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [regionRadioButtonColumns])

  return {
    regionRadioButtonColumns,
    viewportWidth,
  }
}
