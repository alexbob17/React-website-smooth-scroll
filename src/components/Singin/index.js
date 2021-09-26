import React from "react";
import {Container, Form,FormWrap, FormH1, FormLabel, FormContent, Icon, FormInput, FormButton, Text} from '../Singin/SinginElement'


const SingIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Alejo Bank</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sing in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SingIn;
