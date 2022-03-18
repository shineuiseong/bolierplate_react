import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './loginUser.module.css'
import { useSelector } from 'react-redux'
import DropdownBar from '../dropdownBar/dropdownBar'

/*

Navbar에서 user정보가 있으면 렌더링된다.
User정보와 드랍다운 버튼이 있다.


*/

const LoginUser = React.memo(() => {
  const user = useSelector((state) => state.user)
  const [menuVisible, setMenuVisible] = useState(false)

  // menu 영역 클릭 여부판단, 외부 클릭시 사라짐
  const menuRef = useRef()

  const handleLoginUserClick = () => {
    // 드랍다운 제어
    setMenuVisible((menuVisible) => !menuVisible)
  }

  const handleCloseMenu = useCallback(
    (e) => {
      // 드랍다운 true 이고(켜짐) 드랍다운 외부 클릭시 드랍다운 메뉴 제거
      if (menuVisible && (!menuRef.current || !menuRef.current.contains(e.target))) setMenuVisible(false)
    },
    [menuVisible, menuRef]
  )

  useEffect(() => {
    // 외부클릭 이벤트
    window.addEventListener('click', handleCloseMenu)

    // 더이상 사용 no
    return () => {
      window.removeEventListener('click', handleCloseMenu)
    }
  }, [handleCloseMenu])

  return (
    <div className={styles.userWrapper} onClick={handleLoginUserClick}>
      <div className={styles.userName}>nickname</div>

      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10l5 5 5-5z"></path>
      </svg>
      {menuVisible && <DropdownBar></DropdownBar>}
    </div>
  )
})
export default LoginUser
