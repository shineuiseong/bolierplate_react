import React from 'react'
import styles from './navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a>
        <img className={styles.logo} src="/images/logo/logo.png" alt="logo" />
      </a>
      <div className={styles.loginWrapper}>
        <button className={styles.login}>로그인</button>
      </div>
    </nav>
  )
}

export default NavBar
