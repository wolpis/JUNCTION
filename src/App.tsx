import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from './mainpage/mainpage'
import LoginPage from './login/loginpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile/:nickname" element={<div>어바웃페이지임</div>} />
    </Routes>
  )
}

export default App
