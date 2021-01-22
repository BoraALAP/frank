/** @jsx jsx */

import { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Router from "next/router";
import styled from "styled-components";

import { useAuth } from "../../lib/Authentication";

import { Loading } from "../../UI/Loading";
import { ErrorMessage } from "../../UI/ErrorMessages";
import { Button } from "../../UI/Links";

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
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errorState, setErrorState] = useState("");
  const { isAuthenticated } = useAuth();

  const minPasswordLength = 8;

  const handleSubmit = (changePasswordWithToken) => (event) => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      setErrorState("Passwords do not match");
    } else if (password.length < minPasswordLength) {
      setErrorState("Passwords must be longer than 8 characters");
    } else {
      setErrorState("");
      changePasswordWithToken({ variables: { token, password } });
    }
  };

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/");
    }
  }, [isAuthenticated]);

  const { data, loading, error } = useQuery(GET_PASSWORD_TOKEN, {
    variables: { token, accessedAt },
  });

  const [startPasswordRecovery, { error: mutationError }] = useMutation(
    CHANGE_PASSWORD,
    {
      onCompleted: () => {
        Router.push("/signin");
      },
    }
  );

  return (
    <>
      {loading && !data ? (
        <Loading />
      ) : error || !data.passwordTokens || !data.passwordTokens.length ? (
        <ErrorMessage>Invalid or expired token</ErrorMessage>
      ) : (
        <Container>
          <h1>Change password</h1>
          {mutationError && <p>Failed to change password</p>}

          <form noValidate onSubmit={handleSubmit(startPasswordRecovery)}>
            <fieldset>
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                id="password"
                minLength={minPasswordLength}
                autoFocus
                autoComplete="password"
                placeholder="supersecret"
                disabled={isAuthenticated}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="confirmedPassword">Confirm password</label>
              <input
                required
                type="password"
                id="confirmedPassword"
                minLength={minPasswordLength}
                autoComplete="password"
                placeholder="supersecret"
                disabled={isAuthenticated}
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </fieldset>
            {errorState ? <p>{errorState}</p> : null}
            <Button type="submit">Change password</Button>
          </form>
        </Container>
      )}
    </>
  );
};

const resetpassword = ({ token, accessedAt }) => {
  return <ChangePasswordForm token={token} accessedAt={accessedAt} />;
};

resetpassword.getInitialProps = async (context) => {
  const token = context.query.key;
  const accessedAt = new Date().toISOString();
  return { token, accessedAt };
};

const Container = styled.div`
  display: grid;
`;

export default resetpassword;
