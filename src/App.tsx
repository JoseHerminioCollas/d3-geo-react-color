import React, { useContext } from 'react'
import 'material-icons/iconfont/material-icons.css'
import ColorGlobe from './components/ColorGlobe'
import Map from './map'
import { ThemeContext } from './theme/ThemeContext'
import Control from './components/Control'

const App: React.FC = () => {
  const { cssSheet }: any = useContext(ThemeContext)
  return (
    <section className={cssSheet.classes.mainContainer}>
      <Control />
      <ColorGlobe
        Map={Map}
      />
      <section
        style={{
          color: '#111',
          position: 'fixed',
          bottom: '3px',
          left: '3px',
        }}
      >
        <a
          target="new"
          href="https://github.com/JoseHerminioCollas/d3-geo-react-color"
        >
          <i
            className="material-icons"
          >
            info
          </i>
        </a>
        &nbsp;&nbsp;
        ColorGlobe
        <a
          style={{
            textDecoration: 'none',
            fontSize: '0.9em',
          }}
          target="new"
          href="http://goatstone.com"
        >
          &nbsp;&nbsp;
          Goatstone &copy; 2019
        </a>
      </section>
    </section>
  )
}

export default App
