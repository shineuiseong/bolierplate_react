import React, { useEffect } from 'react'
import styles from './navbar.module.css'
import Modal from '../modal/modal_component/modal'
import LoginModal from '../modal/login_modal/loginModal'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoginUser from '../loginUser/loginUser'

import { toast } from 'react-toastify'
import { setModalVisible } from '../../store/loginStep'
import { clearUser, fetchUserByRefreshToken } from '../../store/user'

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const history = useHistory()

  const modalVisible = useSelector((state) => state.loginStep.modalVisible)

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    dispatch(setModalVisible(true))
  }
  const closeModal = () => {
    document.body.style.overflow = 'auto'
    dispatch(setModalVisible(false))
  }
  const handleRegister = () => {
    if (user.id === undefined) {
      openModal()
      return
    }
    history.push('/register')
  }

  useEffect(() => {
    if (user.nickName) {
      dispatch(fetchUserByRefreshToken()).then((res) => {
        if (res.meta.requestStatus !== 'fulfilled') {
          history.push('/')
          dispatch(clearUser())
          toast.error('로그인 만료!!', {
            position: 'top-right',
            autoClose: 3000,
          })
        }
      })
    }
  }, [dispatch, history, user.nickName])

  return (
    <nav className={styles.navbar}>
      <a>
        <img className={styles.logo} src="/images/logo/logo.png" alt="logo" />
      </a>
      <div className={styles.loginWrapper}>
        {/* <button className={styles.postRegister}>글쓰기</button> */}
        {!user.nickName ? (
          <button className={styles.login} onClick={openModal}>
            로그인
          </button>
        ) : (
          <LoginUser />
        )}
      </div>

      <Modal visible={modalVisible} name="login" onClose={closeModal}>
        <LoginModal handleClose={closeModal} tabIndex={0}></LoginModal>
      </Modal>
    </nav>
  )
}

export default NavBar
