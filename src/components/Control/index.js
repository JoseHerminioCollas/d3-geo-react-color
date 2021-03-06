import React, { useContext } from 'react'
import 'material-icons/iconfont/material-icons.css'
import { ThemeContext } from '../../theme/ThemeContext'

function Control() {
  const {
    themeName,
    themes,
    setThemeName,
    cssSheet,
  } = useContext(ThemeContext)

  return (
    <section className={cssSheet.classes.control}>
      {Object.keys(themes).map(theme => (
        <button
          type="button"
          title={themes[theme].label}
          onClick={() => setThemeName(theme)}
          disabled={theme === themeName}
          className={cssSheet.classes.controlColor}
          style={{
            cursor: theme !== themeName ? 'pointer' : 'default',
            background: themes[theme].color,
          }}
        >
          &nbsp;
        </button>
      ))}
    </section>
  )
}
export default Control
