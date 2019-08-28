import React, { useContext } from 'react'
import './App.css'
import 'material-icons/iconfont/material-icons.css'
import ColorGlobe from './components/ColorGlobe'
import Map from './map'
import { ThemeContext } from './theme/ThemeContext'

const App: React.FC = () => {
  const { cssSheet }: any = useContext(ThemeContext)
  return (
    <div className={cssSheet.classes.mainContainer}>
      <header className="App-header">
        <i
          className="material-icons"
        >
          face
        </i>
        <ColorGlobe
          Map={Map}
        />
        <p>
          XXXX
        </p>
      </header>
    </div>
  )
}

export default App
