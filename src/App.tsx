import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './mainpage/mainpage'
import SignInPage from './signin/signinpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/profile/:nickname" element={<div>어바웃페이지임</div>} />
    </Routes>
  )
}

export default App
