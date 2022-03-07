import React, { useState } from 'react'
import styled from 'styled-components'
import { LoginForm } from './LoginForm'
import { motion, transform } from 'framer-motion'
import { AccountContext } from './accountContext'
import { SignupForm } from './SignupForm'

const BoxContainer = styled.div`
  width: 350px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(58deg, rgba(241, 196, 15, 1) 20%, rgba(243, 172, 18, 1) 100%);
`

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`

const backdropVariants = {
  expanded: {
    width: '233%',
    height: '1050px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
    transition: 'all 2s',
  },
  collapsed: {
    width: '160%',
    height: '540px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
    transition: 'all 2s',
  },
}

const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
}

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false)
  const [active, setActive] = useState('signin')

  const playExpandingAnimation = () => {
    setExpanded(true)
    setTimeout(() => {
      setExpanded(false)
    }, expandingTransition.duration * 1000 - 1500)
  }

  const switchToSignup = () => {
    playExpandingAnimation()
    setTimeout(() => {
      setActive('signup')
    }, 1200)
  }

  const switchToSignin = () => {
    playExpandingAnimation()
    setTimeout(() => {
      setActive('signin')
    }, 1200)
  }

  const contextValue = { switchToSignup, switchToSignin }

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop initial={false} animate={isExpanded ? 'expanded' : 'collapsed'} variants={backdropVariants} transition={expandingTransition} />
          {active === 'signin' && (
            <HeaderContainer>
              <HeaderText>로그인</HeaderText>
              <HeaderText>Well come.</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === 'signup' && (
            <HeaderContainer>
              <HeaderText></HeaderText>
              <HeaderText>회원가입</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === 'signin' && <LoginForm />}
          {active === 'signup' && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  )
}
