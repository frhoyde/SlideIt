import React from 'react'
import { Container, Form, FormButton, FormContent, FormInput, FormWrap, FromH1, FromLabel, Icon, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to=''>SlideIt</Icon>
                  <FormContent>
                      <Form action='#'>
                          <FromH1>Sign in to your account</FromH1>
                          <FromLabel htmlFor='for'>Username</FromLabel>
                          <FormInput type='text' required/>
                          {/* <FromLabel htmlFor='for'>Email</FromLabel>
                          <FormInput type='email' required/> */}
                          <FromLabel htmlFor='for'>Password</FromLabel>
                          <FormInput type='password' required/>
                          <FormButton type='submit'>Continue</FormButton>
                          <Text>Forgot password</Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>
          
        </>
    )
}

export default SignIn
