import styled from "styled-components";
import { useEffect } from "react";
import Router from "next/router";

import { useAuth } from "../../lib/Authentication";

import { Container } from "../../components/layout/Container";
import SignInForm from "../../components/auth/SignInForm";

const signin = () => {
  const { isAuthenticated } = useAuth();

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/user/account");
    }
  }, [isAuthenticated]);

  return (
    <Container space padding>
      <SignInForm />
    </Container>
  );
};

export default signin;
