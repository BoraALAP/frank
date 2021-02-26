import { useState, useEffect } from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, ButtonS, TertiaryButton } from "../../UI/Links";
import {
  ErrorMessages,
  FieldContainer,
  FormContainer,
  InputContainer,
  InRow,
  Label,
} from "../../UI/FormElements";
import { useUser } from "./user";
import { CURRENT_USER_QUERY } from "../auth/user";
import { Capitilize } from "../../lib/Stringer";

const SignUpForm = ({ onSuccess }: any) => {
  const user = useUser();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const [createUser, { data, error: dataError }] = useMutation(CREATE_USER);
  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (data?.createUser) {
      setTimeout(() => {
        Router.push("/user/account");
      }, 5000);
    }
  }, [data]);

  if (data?.createUser) {
    return (
      <h4>
        You are successfully signup. You will be redirected to Signin page.
      </h4>
    );
  }

  return (
    <Container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          companyName: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Required")
            .min(2, "Must be 2 characters or more")
            .max(14, "Must be 14 characters or less"),
          lastName: Yup.string()
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
        onSubmit={async ({
          email,
          password,
          firstName,
          lastName,
          companyName,
        }) => {
          try {
            await createUser({
              variables: {
                email: email.toLowerCase(),
                password,
                firstName: Capitilize(`${firstName}`),
                lastName: Capitilize(`${lastName}`),
                companyName: Capitilize(`${companyName}`),
              },
            });

            if (onSuccess && typeof onSuccess === "function") {
              onSuccess();
            }
          } catch (error) {
            console.log(error);

            if (error?.message.includes("E11000")) {
              setError(
                "This email already signed up. Please try Forgot Password"
              );
            } else {
              setError(error?.message);
            }
          }
        }}
      >
        <FormContainer>
          <InRow>
            <FieldContainer>
              <Label htmlFor="firstName">First Name</Label>
              <InputContainer
                autoComplete="firstName"
                autoFocus
                disabled={user}
                id="firstName"
                placeholder="First Name"
                required
                type="text"
                name="firstName"
              />
              <ErrorMessages name="firstName" />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="lastName">Last Name</Label>
              <InputContainer
                autoComplete="lastName"
                autoFocus
                disabled={user}
                id="lastName"
                placeholder="Last Name"
                required
                type="text"
                name="lastName"
              />
              <ErrorMessages name="lastName" />
            </FieldContainer>
          </InRow>
          <FieldContainer>
            <Label htmlFor="email">Email</Label>
            <InputContainer
              autoComplete="email"
              disabled={user}
              placeholder="you@awesome.com"
              required
              type="text"
              id="email"
              name="email"
            />
            <ErrorMessages name="email" />
          </FieldContainer>
          <InRow>
            <FieldContainer>
              <Label htmlFor="password">Password</Label>

              <InputContainer
                disabled={user}
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
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <InRow pass>
                <InputContainer
                  disabled={user}
                  placeholder="Re-enter Password"
                  required
                  type={show ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <ButtonS type="button" onClick={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </ButtonS>
              </InRow>
              <ErrorMessages name="confirmPassword" />
            </FieldContainer>
          </InRow>
          <FieldContainer>
            <Label htmlFor="companyName">Company Name</Label>

            <InputContainer
              autoComplete="company"
              autoFocus
              disabled={user}
              id="companyName"
              placeholder="You Company Name"
              required
              type="text"
              name="companyName"
            />
            <ErrorMessages name="companyName" />
          </FieldContainer>
          <ErrorMessages>{error}</ErrorMessages>
          {user ? (
            <Button disabled>Creating account...</Button>
          ) : (
            <Button type="submit">Sign up</Button>
          )}
        </FormContainer>
      </Formik>
      <ButtonContainer>
        <TertiaryButton href="/user/signin">Sign In</TertiaryButton>
        {dataError?.message.includes("E11000") && (
          <TertiaryButton href="/user/forgot-password">
            Forgot Password
          </TertiaryButton>
        )}
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
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $companyName: String!
  ) {
    createUser(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        companyName: $companyName
      }
    ) {
      id
    }
  }
`;

export default SignUpForm;
