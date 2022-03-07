import React, { useEffect, useState, useRef, useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './../../components/Common/Common'
import { Marginer } from '../../components/Common/Marginer'
import { AccountContext } from '../../components/AccountBox/AccountContext'

const LoginPage = (props) => {
  const { switchToSignup } = useContext(AccountContext)

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?
        <BoldLink href="/user/signup">Signup</BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}

export default { LoginPage }
