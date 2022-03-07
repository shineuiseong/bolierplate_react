import React, { useEffect, useState, useRef } from 'react'
import { Grid, Text, Input } from '../../elements'
import styled from 'styled-components'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as userActions } from '../../redux/modules/user'
import { history } from '../../redux/configureStore'

// 정규식
import { EmailCheck, PwdCheck, nameCheck } from '../../shared/common'

const SignUpPage = (props) => {
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
  }

  useEffect(() => {
    setIsEmail(false)
    setEmailMessage(errMessage)
  }, [errMessage])

  return (
    <React.Fragment>
      <Container>
        <SubContainer>
          <Grid padding="16px">
            <Text size="32px" bold>
              회원가입
            </Text>

            <Input
              resetInput={email === '' || email === undefined ? false : true}
              type="text"
              value={email}
              onChange={CheckEmail}
              onClick={() => {
                setEmail('')
              }}
              placeholder="이메일을 입력해주세요."
            />
            {email.length > 0 ? <Span className={`${isEmail ? 'success' : 'error'}`}>{emailMessage}</Span> : <Span>이메일 형식대로 입력해주세요</Span>}

            <Input
              resetInput={pwd === '' || pwd === undefined ? false : true}
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
              resetInput={pwdCheck === '' || pwdCheck === undefined ? false : true}
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
              resetInput={nickname === '' || nickname === undefined ? false : true}
              type="text"
              value={nickname}
              onChange={onChangeNicknameCheck}
              onClick={() => {
                setNickname('')
              }}
              placeholder="닉네임을 입력해주세요."
            />
            {nickname.length > 0 ? <Span className={`${isName ? 'success' : 'error'}`}>{nameMessage}</Span> : <Span>닉네임 확인</Span>}
            <Button onClick={signUpClick}>회원가입하기</Button>
            <Login
              onClick={() => {
                history.push('/user/login')
              }}
            >
              <p>
                이미 계정이 있으신가요? <span>로그인</span>
              </p>
            </Login>
          </Grid>
        </SubContainer>
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.xxxxl};
  text-align: center;
  display: flex;
  padding-top: 90px;
  padding-bottom: 90px;
`
const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  margin: auto;
  width: 35%;
  box-shadow: 11px 12px 13px 12px rgb(207, 207, 207);
  padding-top: 40px;
  border-radius: 60px;
  background-color: white;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  background-color: ${({ theme }) => theme.colors.main_1};
  background-image: linear-gradient(to right, #ffce00 50%, #ffce00 50%, #fe4880);
  background-size: 200%;
  transition: 0.4s;
  background-position: 0%;
  cursor: pointer;
  &:hover {
    /* color: ${({ theme }) => theme.colors.black};
    transition: 0.4s; */
    background-position: 100%;
  }
`

const Span = styled.span`
  padding-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_5};
  font-size: ${({ theme }) => theme.fontSizes.ssmall};
  display: flex;
  margin-bottom: ${({ theme }) => theme.margins.xxxxl};
  &.success {
    color: #4791ff;
  }
  &.error {
    color: #ff473d;
  }
`
const Login = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  box-sizing: border-box;
  cursor: pointer;
  & p {
    display: inline-block;
    position: relative;
    ::before {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -4px;
      left: 0;
      z-index: 100;
      background-color: ${({ theme }) => theme.colors.white};
    }
    & span {
      color: ${({ theme }) => theme.colors.main_1};
    }
  }
`

export default SignUpPage
