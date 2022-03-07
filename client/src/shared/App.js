import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/SignUpPage/SignUpPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
