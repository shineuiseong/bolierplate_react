import React, { useState } from 'react'

import LoginModal from '../../components/Modal/LoginModal'

import './LoginPage.scss'

const adminUser = {
  email: 'cro@naver.com',
  password: 'admin1234',
}

const LoginPage = () => {
  const [user, setUser] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const Login = (details) => {}

  const Logout = () => {
    console.log('logout')
  }

  return (
    <div className="login">
      {user.email != '' ? (
        <div className="welcome">
          <h2>
            welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginModal Login={Login} error={error} />
      )}
    </div>
  )
}

export default LoginPage
