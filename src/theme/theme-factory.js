import {
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolateReds,
} from 'd3'
import mapStyle from './map-style'

const themes = {
  default: { label: 'Gray', color: 'gray' },
  gray: { label: 'Gray', color: 'gray' },
  red: { label: 'Red', color: '#f00' },
  green: { label: 'Green', color: 'green' },
  blue: { label: 'Blue', color: 'blue' },
  orange: { label: 'Orange', color: 'orange' },
}
export { themes }
const interpolators = {
  default: interpolateGreys,
  gray: interpolateGreys,
  red: interpolateReds,
  green: interpolateGreens,
  blue: interpolateBlues,
  orange: interpolateBlues,
}
const defaultStyle = {
  mainContainer: {
    stroke: 'white',
    fill: 'black',
    color: 'white',
    background: 'black',
    width: '100%',
    height: '100%',
    fontFamily: 'Verdana, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  control: {
    color: 'white',
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlColor: {
    width: '30px',
    height: '30px',
  },
}
Object.assign(defaultStyle, mapStyle)

function colorize(interpolator) {
  defaultStyle.mainContainer.background = interpolator(0.2)
  defaultStyle.mainContainer.fill = interpolator(0.5)
  defaultStyle.mainContainer.stroke = interpolator(0.7)
  const newStyleObject = JSON.parse(JSON.stringify(defaultStyle))
  return newStyleObject
}
function themeFactory(themeName = 'default') {
  if (!interpolators[themeName]) throw new Error('name does not exist')
  return colorize(interpolators[themeName])
}
export default themeFactory
