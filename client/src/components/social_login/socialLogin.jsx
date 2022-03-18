import React from 'react'
import styles from './socialLogin.module.css'
import GoogleLogin from 'react-google-login'
import KakaoLogin from 'react-kakao-login'
import GoogleButton from '../login_button/google_button/googleButton'
import GithubButton from '../login_button/github_button/githubButton'
import KakaoButton from '../login_button/kakao_button/kakaoButton'

const SocialLogin = ({ googleOnSuccess, googleOnFailure, googleClientId, kakaoOnSuccess, kakaoOnFailure, kakaoClientId }) => {
  return (
    <>
      <h1 className={styles.loginTitle}> 로그인화면이에요!</h1>
      <div className={styles.descriptionMobile}>소셜 계정으로 로그인</div>
      <section className={styles.loginWrapper}>
        <GoogleLogin
          clientId={googleClientId}
          responseType={'id_token'}
          onSuccess={googleOnSuccess}
          onFailure={googleOnFailure}
          render={(renderProps) => <GoogleButton onClick={renderProps.onClick}></GoogleButton>}
        />

        <KakaoLogin token={kakaoClientId} onSuccess={kakaoOnSuccess} onFailure={kakaoOnFailure} render={({ onClick }) => <KakaoButton onClick={onClick}></KakaoButton>} />
      </section>
    </>
  )
}

export default SocialLogin
