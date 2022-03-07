import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import LandingPage from '../pages/LandingPage/LandingPage'
// import LoginPage from '../pages/LoginPage/LoginPage'
// import RegisterPage from '../pages/SignUpPage/SignUpPage'
// import Sign from '../pages/SignUpPage/Sign'
import styled from 'styled-components'
import { AccountBox } from '../components/accountBox'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Router>
      <Routes>
        {/* 초기 로그인 및 회원가입 화면 */}
        <Route
          path="/"
          element={
            <AppContainer>
              <AccountBox />
            </AppContainer>
          }
        />

        <Route />

        {/* <Route
          path="/"
          exact={true}
          element={
            <AppContainer>
              <AccountBox />
            </AppContainer>
          }
        /> */}
        {/* <Route path="/user/login" element={<LoginPage />} /> */}
        {/* <Route path="/user/signup" element={<Sign />} /> */}
      </Routes>
    </Router>
  )
}

export default App
