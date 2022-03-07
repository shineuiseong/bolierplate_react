import React, { useContext, useEffect, useState } from 'react'

import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './Common'
import { Marginer } from './Marginer'
import { AccountContext } from './accountContext'
import styled from 'styled-components'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as userActions } from '../../redux/modules/user'
import { history } from '../../redux/configureStore'

// 정규식
import { EmailCheck, PwdCheck, nameCheck } from '../../shared/common'

export function SignupForm(props) {
  // 애니메이션
  const { switchToSignin } = useContext(AccountContext)

  const dispatch = useDispatch()
  const errMessage = useSelector((store) => store.user.signup_errMessage)

  // 사용자 정보
  const [email, setEmail] = useState('') //이메일
  const [nickname, setNickname] = useState('') //닉네임
  const [pwd, setPwd] = useState('') //비밀번호
  const [pwdCheck, setPwdCheck] = useState('') //비밀번호체크

  // 메시지
  const [emailMessage, setEmailMessage] = useState('')
  const [nameMessage, setNameMessage] = useState('')
  const [pwdMessage, setPwdMessage] = useState('')
  const [pwdCheckMessage, setPwdCheckMessage] = useState('')

  // 체크
  const [isEmail, setIsEmail] = useState(false)
  const [isPwd, setIsPwd] = useState(false)
  const [isPwdCheck, setIsPwdCheck] = useState(false)
  const [isName, setIsName] = useState(false)

  //이메일 체크
  const CheckEmail = (e) => {
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    //정규식
    if (!EmailCheck(emailCurrent)) {
      setEmailMessage('이메일 형식이 아닙니다.')
      setIsEmail(false)
    } else {
      setEmailMessage('이메일 확인')
      setIsEmail(true)
    }
  }
  // 비밀번호 체크
  const onChangePasswordCheck = (e) => {
    const passwordCurrent = e.target.value
    setPwd(passwordCurrent)

    if (!PwdCheck(passwordCurrent)) {
      setPwdMessage('비밀번호 영문, 숫자, 특수문자 조합 (8~20자)')
      setIsPwd(false)
    } else {
      setPwdMessage('비밀번호 확인')
      setIsPwd(true)
    }
  }

  // 비밀번호 재입력 체크
  const onChangeRePasswordCheck = (e) => {
    const RepasswordCurrent = e.target.value
    setPwdCheck(RepasswordCurrent)

    if (pwd !== RepasswordCurrent) {
      setPwdCheckMessage('비밀번호가 다릅니다. 다시 입력해주세요.')
      setIsPwdCheck(false)
    } else {
      setPwdCheckMessage('비밀번호 확인')
      setIsPwdCheck(true)
    }
  }

  const onChangeNicknameCheck = (e) => {
    const nicknameCurrent = e.target.value
    setNickname(nicknameCurrent)

    if (!nameCheck(nicknameCurrent)) {
      setNameMessage('3글자 이상 10글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('확인')
      setIsName(true)
    }
  }

  const signUpClick = () => {
    if (!isEmail || !isPwd || !isPwdCheck) {
      window.alert('아이디, 패스워드를 정확하게 입력해주세요')
      return
    }
    // dispatch(userActions.signupDB(email, pwd, pwdCheck, nickname))
    const body = {
      email,
      pwd,
      pwdCheck,
      nickname,
    }
    console.log(body)
    window.location.replace('/')
  }

  useEffect(() => {
    setIsEmail(false)
    setEmailMessage(errMessage)
  }, [errMessage])

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={CheckEmail}
          onClick={() => {
            setEmail('')
          }}
        />
        {email.length > 0 ? <Span className={`${isEmail ? 'success' : 'error'}`}>{emailMessage}</Span> : <Span>이메일 형식대로 입력해주세요</Span>}
        <Input
          type="password"
          value={pwd}
          onChange={onChangePasswordCheck}
          onClick={() => {
            setPwd('')
          }}
          placeholder="비밀번호를 입력해주세요."
        />
        {pwd.length > 0 ? <Span className={`${isPwd ? 'success' : 'error'}`}>{pwdMessage}</Span> : <Span>비밀번호 영문,숫자,특수문자 조합(8~20자)</Span>}
        <Input
          type="password"
          value={pwdCheck}
          onChange={onChangeRePasswordCheck}
          onClick={() => {
            setPwdCheck('')
          }}
          placeholder="비밀번호를 다시 입력해주세요."
        />
        {pwdCheck.length > 0 ? <Span className={`${isPwdCheck ? 'success' : 'error'}`}>{pwdCheckMessage}</Span> : <Span>비밀번호 확인</Span>}
        <Input
          type="text"
          value={nickname}
          onChange={onChangeNicknameCheck}
          onClick={() => {
            setNickname('')
          }}
          placeholder="닉네임을 입력해주세요."
        />
        {nickname.length > 0 ? <Span className={`${isName ? 'success' : 'error'}`}>{nameMessage}</Span> : <Span>닉네임 확인</Span>}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={signUpClick}>
        회원가입
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      이미 계정이 있으신가요?
      <BoldLink href="#" onClick={switchToSignin}>
        로그인
      </BoldLink>
    </BoxContainer>
  )
}

const Span = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_4};
  font-size: ${({ theme }) => theme.fontSizes.ssmall};
  display: flex;
  margin-bottom: 20px;
  &.success {
    color: #4791ff;
  }
  &.error {
    color: #ff473d;
  }
`
