import styled from "styled-components";
import * as Yup from "yup";
import { Formik } from "formik";

import { Button, TertiaryButton } from "../../UI/Links";
import {
  ErrorMessages,
  FieldContainer,
  FormContainer,
  InputContainer,
  Label,
} from "../../UI/FormElements";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CHANGE_PASSWORD = gql`
  mutation resetPassword($email: String!, $token: String!, $password: String!) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

const ResetPasswordForm = ({ token }) => {
  const [show, setShow] = useState(false);

  const [resetPassword, { data, loading }] = useMutation(CHANGE_PASSWORD);

  const error = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  if (data?.redeemUserPasswordResetToken === null) {
    return (
      <div>
        <h4>Your Password is successfully changed. Please Sign in Now.</h4>
        <TertiaryButton href="/user/signin">Sign In</TertiaryButton>
      </div>
    );
  }

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          confirmPassword: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or less")
            .required("Required"),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
        })}
        onSubmit={async ({ password, email }) => {
          try {
            await resetPassword({
              variables: { token, password, email: email.toLowerCase() },
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <FormContainer>
          <FieldContainer>
            <Label htmlFor="email">Email</Label>
            <InputContainer
              disabled={false}
              required
              type="text"
              id="email"
              name="email"
              minLength={8}
              autoFocus
              autoComplete="email"
              placeholder="Your Email"
            />
            <ErrorMessages name="password" />
            <Button type="button" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="password">Password</Label>
            <InputContainer
              disabled={false}
              required
              type={show ? "text" : "password"}
              id="password"
              name="password"
              minLength={8}
              autoFocus
              autoComplete="password"
              placeholder="Password"
            />
            <ErrorMessages name="password" />
            <Button type="button" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <InputContainer
              disabled={false}
              placeholder="Re-enter Password"
              required
              type={show ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessages name="confirmPassword" />
          </FieldContainer>
          {/* 
          {"test" ? (
            <Button disabled>Signing in...</Button>
          ) : ( */}
          <Button type="submit">Reset Password</Button>
          {/* )} */}
        </FormContainer>
      </Formik>
      <ErrorMessages>{error}</ErrorMessages>
      <ButtonContainer>
        <TertiaryButton href="/user/forgot-password">
          Forgot Password
        </TertiaryButton>
        <TertiaryButton href="/user/signup">Sign Up</TertiaryButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 5rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 1rem;
  max-width: 40rem;
`;

export default ResetPasswordForm;
