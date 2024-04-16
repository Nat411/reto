import './App.css'
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom'
import Home from './components/home'
import Details from './components/details'
import Header from './components/header'

function App() {
  return (

  <HashRouter>
    {/* <div className='App'>
          <Header/>
        </div> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
      </Routes>
    
  </HashRouter>

  )
}

export default App
