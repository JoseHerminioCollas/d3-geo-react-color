import React from 'react'
import './App.css'
import 'material-icons/iconfont/material-icons.css'
import ColorGlobe from './components/ColorGlobe'
import Map from './map'

const App: React.FC = () => (
  <div className="App">
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

export default App
