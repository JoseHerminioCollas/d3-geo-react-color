import React, { useContext } from 'react'
import stateData from '../geojson/5m/2018/state.json'
import earthData from '../geojson/earth.json'
import seattleData from '../geojson/seattle.json'
import { ThemeContext } from '../theme/ThemeContext'

function ColorGlobe({ Map }) {
  const { cssSheet } = useContext(ThemeContext)
  return (
    <svg className={cssSheet.classes.mapContainer}>
      <rect />
      <g
        width="960"
        height="500"
        transform="scale(0.6) translate(0, 180)"
      >
        <path
          d={Map.path(Map.graticule())}
          className={cssSheet.classes.graticule}
        />
        <path
          d={Map.path(earthData)}
          className={cssSheet.classes.earth}
        />
        <path
          d={Map.path(stateData)}
          className={cssSheet.classes.state}
        />
        <path
          d={Map.path(seattleData)}
          className={cssSheet.classes.city}
        />
      </g>
    </svg>

  )
}

export default ColorGlobe
