import React, { useContext, useState, useEffect } from 'react'

import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './Common'
import { Marginer } from './Marginer'
import { AccountContext } from './accountContext'
import styled from 'styled-components'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as userActions } from '../../redux/modules/user'
import { history } from '../../redux/configureStore'

import { EmailCheck, PwdCheck } from '../../shared/common'

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext)

  const dispatch = useDispatch()
  const user = useSelector((store) => store.user.user)

  const [Message, setMessage] = useState('')
  const [isState, setIsState] = useState(true)

  const [inputs, setInputs] = useState({
    email: '',
    pwd: '',
  })
  const { email, pwd } = inputs

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const onReset = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: '',
    })
    setIsState(false)
    setMessage('')
  }

  // 로그인
  const loginClick = () => {
    if (!EmailCheck(email) || PwdCheck(pwd)) {
      setMessage('입력한 내용을 다시 확인해주세요')
      setIsState(false)
      return
    } else {
      setIsState(true)
      setMessage('')
      //dispatch(userActions.loginDB(email, pwd))
    }
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="이메일" value={email} name="email" onChange={onChange} onClick={onReset} />
        <Input type="password" placeholder="비밀번호" value={pwd} name="pwd" onChange={onChange} onClick={onReset} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="/main">패스워드 찾기</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      {/* {!isState ? <Span>{Message}</Span> :<Span><Span/>{'}'} */}
      {!isState ? <Span>{Message}</Span> : <Span></Span>}
      <SubmitButton type="submit" onClick={loginClick}>
        로그인
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      회원이 아니신가요?{' '}
      <BoldLink href="#" onClick={switchToSignup}>
        회원가입
      </BoldLink>
    </BoxContainer>
  )
}
const Span = styled.span`
  height: 54px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.ssmall};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff473d;
  transition: opacity 2s ease 5s;
`
