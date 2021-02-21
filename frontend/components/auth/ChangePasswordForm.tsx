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

import { gql, useQuery, useMutation } from "@apollo/client";
import Router from "next/router";
import { useState } from "react";

const CHANGE_PASSWORD = gql`
  mutation ChangePasswordWithToken($token: String!, $password: String!) {
    changePasswordWithToken(token: $token, password: $password) {
      id
    }
  }
`;

const GET_PASSWORD_TOKEN = gql`
  query allForgottenPasswordTokens($token: String!, $accessedAt: DateTime) {
    passwordTokens: allForgottenPasswordTokens(
      where: { token: $token, expiresAt_gte: $accessedAt }
    ) {
      id
    }
  }
`;

const ChangePasswordForm = ({ token, accessedAt }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const [show, setShow] = useState(false);
  const { data, loading, error } = useQuery(GET_PASSWORD_TOKEN, {
    variables: { token, accessedAt },
  });

  const [ChangePasswordWithToken, { error: mutationError }] = useMutation(
    CHANGE_PASSWORD,
    {
      onCompleted: () => {
        Router.push("/user/signin");
      },
    }
  );

  return (
    <Container>
      <Formik
        initialValues={{
          confirmPassword: "",
          password: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(8, "Must be 8 characters or less")
            .required("Required"),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
        })}
        onSubmit={async ({ password }) => {
          try {
            await ChangePasswordWithToken({ variables: { token, password } });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <FormContainer>
          <FieldContainer>
            <Label htmlFor="password">Password</Label>
            <InputContainer
              disabled={isLoading || isAuthenticated}
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
              disabled={isLoading || isAuthenticated}
              placeholder="Re-enter Password"
              required
              type={show ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessages name="confirmPassword" />
          </FieldContainer>

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

export default ChangePasswordForm;
