import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './mainpage/mainpage'
import SignInPage from './signin/signinpage'
import SignUpPage from './signup/signuppage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
