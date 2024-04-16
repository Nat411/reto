import './App.css'
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Home from './components/home'
import Details from './components/details/details'

function App() {
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/details" element = {<Details />} />
          </Routes>
        </div>
      </BrowserRouter>


  )
}

export default App
