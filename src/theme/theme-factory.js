import {
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolateReds,
} from 'd3'

const menuOptions = [
  { label: 'Red', color: 'red', keyValue: 'redStyle' },
  { label: 'Blue', color: 'blue', keyValue: 'blueStyle' },
  { label: 'Green', color: 'green', keyValue: 'greenStyle' },
  { label: 'Gray', color: 'gray', keyValue: 'grayStyle' },
]
const interpolators = {
  defaultStyle: interpolateGreys,
  grayStyle: interpolateGreys,
  redStyle: interpolateReds,
  greenStyle: interpolateGreens,
  blueStyle: interpolateBlues,
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

function colorize(interpolator) {
  defaultStyle.mainContainer.background = interpolator(0.2)
  defaultStyle.mainContainer.fill = interpolator(0.5)
  defaultStyle.mainContainer.stroke = interpolator(0.7)
  const newStyleObject = JSON.parse(JSON.stringify(defaultStyle))
  return newStyleObject
}
function themeFactory(themeName = 'defaultStyle') {
  return colorize(interpolators[themeName])
}
export { menuOptions }
export default themeFactory
