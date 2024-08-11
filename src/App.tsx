import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './mainpage/mainpage'
import SignInPage from './signin/signinpage'
import SignUpPage from './signup/signuppage'
import Profile from './profileview/profileview'
import DetailPage from './detail/detailpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  )
}

export default App
