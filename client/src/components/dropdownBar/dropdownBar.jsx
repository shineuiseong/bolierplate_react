import React from 'react'
import styles from './dropdownBar.module.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearUser } from '../../store/user'
import authService from '../../service/auth_service'
import { clearStep } from '../../store/loginStep'

/*

로그인 컴포넌트 dropdownbar 클릭시 렌더링 되는 컴포넌트이다.

현재는 로그아웃만 있을예정

*/

const DropdownBar = () => {
  const dispatch = useDispatch()

  // 로그아웃 핸들링
  const handleLogout = async () => {
    // 로그아웃
    await authService.logout()
    //유저 초기화
    dispatch(clearUser())
    //로그인 스탭 초기화
    dispatch(clearStep())
    // 토큰 초기화
    authService.resetToken()
  }

  return (
    <div className={styles.menuWrapper}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/setting" style={{ display: 'inline-block' }}>
            설정
          </Link>
        </li>
        <li className={styles.menuItem}>로그아웃</li>
      </ul>
    </div>
  )
}
export default DropdownBar
