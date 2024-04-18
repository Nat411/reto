import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './components/home'
import Details from './components/details'

function App() {
  return (

  <HashRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
      </Routes>
    
  </HashRouter>

  )
}

export default App
