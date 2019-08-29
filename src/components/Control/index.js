import React, { useContext } from 'react'
import 'material-icons/iconfont/material-icons.css'
import { ThemeContext, themeNames } from '../../theme/ThemeContext'

function Control() {
  const { themeName, setThemeName, cssSheet } = useContext(ThemeContext)

  return (
    <section
      style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        bottom: 0,
      }}
    >
      <section className={cssSheet.classes.controlColor}>
        {Object.values(themeNames).map(tN => (
          <button
            type="button"
            onClick={() => setThemeName(tN.keyValue)}
            disabled={tN.keyValue === themeName}
            style={{
              background: tN.color,
              width: '25px',
            }}
          >
            &nbsp;
          </button>
        ))}
      </section>
      )
    </section>
  )
}
export default Control
