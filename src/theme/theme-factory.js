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
}
export { themes }
const interpolators = {
  default: interpolateGreys,
  gray: interpolateGreys,
  red: interpolateReds,
  green: interpolateGreens,
  blue: interpolateBlues,
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
  return colorize(interpolators[themeName])
}
export default themeFactory
