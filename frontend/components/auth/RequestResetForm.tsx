import styled from "styled-components";
import { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";

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

export const REQUEST_RESET_MUTATION = gql`
  mutation startPasswordRecovery($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      message
      code
    }
  }
`;

const RequestResetForm = ({ onSuccess }: any) => {
  const [emailSent, setEmailSent] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [errors, setErrors] = useState("");

  if (seconds === -1) {
    setSeconds(59);
    setMinutes((minutes) => minutes - 1);
  }
  const timer = () => {
    const sec = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
      console.log("running");
    }, 1000);
    setTimeout(() => {
      console.log("cleared");

      clearInterval(sec);
    }, 300000);
  };
  if (seconds === 0 && minutes === 0) {
    setEmailSent(false);

    setMinutes(5);
    setSeconds(0);
  }

  const [startPasswordRecovery, { data, error, loading }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      onCompleted: () => {
        setEmailSent(true);
        timer();
        if (onSuccess && typeof onSuccess === "function") {
          onSuccess();
        }
        // console.log(data);
      },
    }
  );
  if (data?.sendUserPasswordResetLink === null) {
    return (
      <SentEmail>
        <h6>Email has been sent to your email</h6>
        <p>
          Please wait {minutes}:{seconds < 10 ? `0${seconds}` : seconds} for
          requesting a new one
        </p>
      </SentEmail>
    );
  }

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
            await startPasswordRecovery({
              variables: { email: email.toLowerCase() },
            });

            if (onSuccess && typeof onSuccess === "function") {
              onSuccess();
            }
          } catch (error) {
            setErrors(error?.message);
          }
        }}
      >
        {(props) => (
          <FormContainer>
            <FieldContainer>
              <Label htmlFor="email">Email</Label>
              <InputContainer
                disabled={loading}
                placeholder="you@awesome.com"
                required
                type="text"
                id="email"
                name="email"
              />
              <ErrorMessages name="email" />
            </FieldContainer>
            <ErrorMessages>{errors}</ErrorMessages>
            {loading ? (
              <Button disabled>Email is sending...</Button>
            ) : (
              <Button type="submit">Send Email</Button>
            )}
          </FormContainer>
        )}
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

const SentEmail = styled.div`
  display: grid;
`;

export default RequestResetForm;
