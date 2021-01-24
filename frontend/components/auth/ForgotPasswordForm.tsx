import styled from "styled-components";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import Link from "next/link";

import { useAuth } from "../../lib/Authentication";
import { Button } from "../../UI/Links";

export const CREATE_FORGOT_PASSWORD_TOKEN = gql`
  mutation startPasswordRecovery($email: String!) {
    startPasswordRecovery(email: $email) {
      id
    }
  }
`;

const ForgotPasswordForm = ({ onSuccess }: any) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleSubmit = (startPasswordRecovery) => (event) => {
    event.preventDefault();
    startPasswordRecovery({ variables: { email } });
  };

  const [
    startPasswordRecovery,
    { error: mutationError, loading },
  ] = useMutation(CREATE_FORGOT_PASSWORD_TOKEN, {
    onCompleted: () => {
      setEmailSent(true);

      if (onSuccess && typeof onSuccess === "function") {
        onSuccess();
      }
    },
  });

  return (
    <>
      <h1>Forgot password</h1>
      {mutationError && <p>There is no account with the email "{email}"</p>}

      <form noValidate onSubmit={handleSubmit(startPasswordRecovery)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            autoFocus
            autoComplete="email"
            placeholder="you@awesome.com"
            disabled={isAuthenticated}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <div>
          {loading ? (
            <Button>Sending email...</Button>
          ) : emailSent ? (
            <Button>Email sent</Button>
          ) : (
            <Button type="submit">Send</Button>
          )}
          <Link href="/user/signin">Sign in</Link>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
