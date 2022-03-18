import React from 'react'
import Modal from '../../components/modal/modal_component/modal'
import styles from './setting.module.css'
import Navbar from '../../components/nav_bar/navbar'
import PopUpButton from '../../components/popUpButton/popUpButton'

const Setting = ({ nickName, setNickName, openModal, closeModal, showPopup, onCompleteClick, onSignOutClick }) => {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <h1>마이 페이지</h1>
        <div className={styles.titleWrapper}>
          <h3>닉네임</h3>
          <input
            type="text"
            name="nickNameInput"
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value)
            }}
          />
        </div>
        <p className={styles.description}> 사용자 닉네임입니다.</p>
        <hr />

        {/* 수정완료 버튼 */}
        <button onClick={onCompleteClick} className={`${styles.buttonComplete} ${styles.mainButton}`} name="complete">
          완료
        </button>
        {/* 회원탈퇴 버튼 */}
        <button onClick={openModal} className={`${styles.buttonSignOut} ${styles.mainButton}`} name="signOut">
          회원탈퇴
        </button>
        <Modal visible={showPopup} onClose={closeModal}>
          <PopUpButton confirmMsg="계정을 삭제 하시겠습니까?" positiveMsg="네, 삭제하겠습니다." negativeMsg="아니요" onPublish={onSignOutClick} onCancel={closeModal}></PopUpButton>
        </Modal>
      </div>
    </>
  )
}

export default Setting
