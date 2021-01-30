import styled from "styled-components";
import * as Yup from "yup";
import { Formik } from "formik";

import { useAuth } from "../../lib/Authentication";
import { Button, TertiaryButton } from "../../UI/Links";
import {
  ErrorMessages,
  FieldContainer,
  FormContainer,
  InputContainer,
  Label,
} from "../../UI/FormElements";
import { useState } from "react";

const SignInForm = ({ onSuccess }: any) => {
  const { isAuthenticated, signin, isLoading } = useAuth();
  const [error, setError] = useState("");

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or less")
            .required("Required"),
        })}
        onSubmit={async ({ email, password }) => {
          try {
            await signin({
              variables: { email: email.toLowerCase(), password },
            });

            if (onSuccess && typeof onSuccess === "function") {
              onSuccess();
            }
          } catch (error) {
            // console.log(error?.message);
            setError("Please check your email and password");
          }
        }}
      >
        <FormContainer>
          <FieldContainer>
            <Label htmlFor="email">Email</Label>
            <InputContainer
              disabled={isLoading || isAuthenticated}
              placeholder="you@awesome.com"
              required
              type="text"
              id="email"
              name="email"
            />
            <ErrorMessages name="email" />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="password">Password</Label>
            <InputContainer
              disabled={isLoading || isAuthenticated}
              id="password"
              minLength="2"
              placeholder="supersecret"
              required
              type="password"
              name="password"
            />
            <ErrorMessages name="password" />
          </FieldContainer>
          <ErrorMessages>{error}</ErrorMessages>
          {isLoading ? (
            <Button disabled>Signing in...</Button>
          ) : (
            <Button type="submit">Sign in</Button>
          )}
        </FormContainer>
      </Formik>
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

export default SignInForm;
