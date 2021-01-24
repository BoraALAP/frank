import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import { useAuth } from "../../lib/Authentication";
import { Button } from "../../UI/Links";
import { Container } from "../layout/Container";

const onChange = (handler) => (e) => handler(e.target.value);

const SignInForm = ({ onSuccess, onClickForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const { isAuthenticated, signin } = useAuth();

  // if the user is logged in, redirect to the homepage

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      await signin({ variables: { email, password } });
      setIsLoading(false);
      setErrorState(false);
      if (onSuccess && typeof onSuccess === "function") {
        onSuccess();
      }
    } catch (error) {
      setErrorState(true);
    }
  };

  return (
    <>
      {errorState && (
        <p>Please check your email and password then try again.</p>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            autoComplete="email"
            autoFocus
            disabled={isLoading || isAuthenticated}
            onChange={onChange(setEmail)}
            placeholder="you@awesome.com"
            required
            type="text"
            value={email}
            id="email"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            autoComplete="password"
            disabled={isLoading || isAuthenticated}
            id="password"
            minLength={8}
            onChange={onChange(setPassword)}
            placeholder="supersecret"
            required
            type="password"
            value={password}
          />
        </fieldset>

        <div>
          {isLoading ? (
            <Button disabled>Signing in...</Button>
          ) : (
            <Button type="submit">Sign in</Button>
          )}
          <Link href="/user/forgot-password">Forgot password</Link>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
