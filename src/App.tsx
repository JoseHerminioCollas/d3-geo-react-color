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
      <i
        className="material-icons"
      >
        face
      </i>
      <Control />
      <ColorGlobe
        Map={Map}
      />
    </section>
  )
}

export default App
