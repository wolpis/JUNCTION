import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './mainpage/mainpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Mainpage/> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
    </Routes>
  )
}

export default App
