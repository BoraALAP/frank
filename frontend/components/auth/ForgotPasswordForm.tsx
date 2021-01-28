import styled from "styled-components";
import { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";

import * as Yup from "yup";
import { Formik } from "formik";

import Link from "next/link";

import { useAuth } from "../../lib/Authentication";
import { Button } from "../../UI/Links";
import {
  ErrorMessages,
  FieldContainer,
  FormContainer,
  InputContainer,
  Label,
} from "../../UI/FormElements";

export const CREATE_FORGOT_PASSWORD_TOKEN = gql`
  mutation startPasswordRecovery($email: String!) {
    startPasswordRecovery(email: $email) {
      id
    }
  }
`;

const ForgotPasswordForm = ({ onSuccess }: any) => {
  const { isAuthenticated, isLoading } = useAuth();
  const [emailSent, setEmailSent] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(5);

  let s;

  useEffect(() => {
    if (emailSent) {
      s = setInterval(() => {
        console.log(seconds - 1);
        setSeconds(seconds - 1);
      }, 1000);

      // setInterval(() => {
      //   setMinutes(minutes - 1 );
      // }, 60000);

      if (minutes <= 0 && seconds <= 0) {
        clearInterval(s);
        setEmailSent(false);
      }
    }
  }, [emailSent]);

  console.log(seconds);

  const [
    startPasswordRecovery,
    { data, error: mutationError, loading },
  ] = useMutation(CREATE_FORGOT_PASSWORD_TOKEN, {
    onCompleted: () => {
      setEmailSent(true);

      if (onSuccess && typeof onSuccess === "function") {
        onSuccess();
      }
    },
  });

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={async ({ email }) => {
          try {
            await startPasswordRecovery({ variables: { email } });

            if (onSuccess && typeof onSuccess === "function") {
              onSuccess();
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(props) =>
          emailSent ? (
            <SentEmail>
              <h4>Email has been sent to {props.values.email}</h4>
              <h6>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </h6>
            </SentEmail>
          ) : (
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

              {isLoading || loading ? (
                <Button disabled>Email is sending...</Button>
              ) : (
                <Button type="submit">Send Email</Button>
              )}
            </FormContainer>
          )
        }
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 5rem;
`;

const SentEmail = styled.div`
  display: grid;
`;

export default ForgotPasswordForm;
