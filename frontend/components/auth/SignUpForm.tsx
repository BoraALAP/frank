import { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";

import { useAuth } from "../../lib/Authentication";
import { Button, TertiaryButton } from "../../UI/Links";

const onChange = (handler) => (e) => handler(e.target.value);

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const { isAuthenticated, signin } = useAuth();

  const handleSubmit = (createAUser) => (event) => {
    event.preventDefault();
    createAUser({ variables: { name, email, password, companyName } });
  };

  const handleSignin = async () => {
    setIsLoading(true);
    try {
      await signin({ variables: { email, password } });
      setIsLoading(false);
      setErrorState(false);
    } catch (error) {
      setErrorState(true);
    }
  };

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/user/account");
    }
  }, [isAuthenticated]);

  const [createAUser, { error: mutationError }] = useMutation(CREATE_USER, {
    onCompleted: handleSignin,
  });

  return (
    <>
      {mutationError && <p>The email provided is already in use.</p>}
      {errorState && <p>An unknown error has occurred</p>}

      <form noValidate onSubmit={handleSubmit(createAUser)}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            autoComplete="name"
            autoFocus
            disabled={isLoading || isAuthenticated}
            id="name"
            onChange={onChange(setName)}
            placeholder="full name"
            required
            type="text"
            value={name}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            autoComplete="email"
            disabled={isLoading || isAuthenticated}
            id="email"
            onChange={onChange(setEmail)}
            placeholder="you@awesome.com"
            required
            type="text"
            value={email}
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

        <fieldset>
          <label htmlFor="companyName">Company Name</label>
          <input
            autoComplete="companyName"
            disabled={isLoading || isAuthenticated}
            id="companyName"
            onChange={onChange(setCompanyName)}
            placeholder="Organization"
            required
            type="text"
            value={companyName}
          />
        </fieldset>

        {isLoading ? (
          <Button disabled>Creating account...</Button>
        ) : (
          <Button type="submit">Sign up</Button>
        )}
        <TertiaryButton href="/user/signin">Sign In</TertiaryButton>
      </form>
    </>
  );
};

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
