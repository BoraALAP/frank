import { useState, useEffect } from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
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

const SignUpForm = ({ onSuccess }: any) => {
  const { isAuthenticated, signin, isLoading } = useAuth();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/user/account");
    }
  }, [isAuthenticated]);

  const [createAUser, { error: mutationError }] = useMutation(CREATE_USER, {
    onCompleted: () => {
      signin({ variables: { email: info.email, password: info.password } });
    },
  });

  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          companyName: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required")
            .min(2, "Must be 2 characters or more")
            .max(14, "Must be 14 characters or less"),
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
          companyName: Yup.string()
            .required("Required")
            .min(2, "Must be 2 characters or more")
            .max(14, "Must be 14 characters or less"),
        })}
        onSubmit={async ({ email, password, name, companyName }) => {
          setInfo({ email: email.toLowerCase(), password });
          try {
            await createAUser({
              variables: {
                email: email.toLowerCase(),
                password,
                name,
                companyName,
              },
            });

            if (onSuccess && typeof onSuccess === "function") {
              onSuccess();
            }
          } catch (error) {
            setError(error?.message);
          }
        }}
      >
        <FormContainer>
          <FieldContainer>
            <Label htmlFor="name">Name</Label>
            <InputContainer
              autoComplete="name"
              autoFocus
              disabled={isLoading || isAuthenticated}
              id="name"
              placeholder="Full Name"
              required
              type="text"
              name="name"
            />
            <ErrorMessages name="name" />
          </FieldContainer>
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
              required
              type={show ? "text" : "password"}
              id="password"
              name="password"
              minLength={8}
              autoFocus
              autoComplete="password"
              placeholder="Password"
            />
            <Button type="button" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
            <ErrorMessages name="password" />
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
          <FieldContainer>
            <Label htmlFor="companyName">Company Name</Label>

            <InputContainer
              autoComplete="companyName"
              autoFocus
              disabled={isLoading || isAuthenticated}
              id="companyName"
              placeholder="You Company Name"
              required
              type="text"
              name="companyName"
            />
            <ErrorMessages name="companyName" />
          </FieldContainer>
          <ErrorMessages>{error}</ErrorMessages>
          {isLoading ? (
            <Button disabled>Creating account...</Button>
          ) : (
            <Button type="submit">Sign up</Button>
          )}
        </FormContainer>
      </Formik>
      <ButtonContainer>
        <TertiaryButton href="/user/signin">Sign In</TertiaryButton>
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

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $companyName: String!
  ) {
    createAUser(
      name: $name
      email: $email
      password: $password
      companyName: $companyName
    ) {
      id
    }
  }
`;

export default SignUpForm;
