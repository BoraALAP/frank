import styled from "styled-components";
import { useEffect } from "react";
import Router from "next/router";

import { useAuth } from "../../lib/Authentication";

import { Container } from "../../components/layout/Container";
import SignInForm from "../../components/auth/SignInForm";
import { PageTitle } from "../../components/pageSpecific/products/PageTitle";

const signin = () => {
  const { isAuthenticated } = useAuth();

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/user/account");
    }
  }, [isAuthenticated]);

  return (
    <Container space padding gap title="Sign In">
      <PageTitle title="Sign In" />
      <SignInForm />
    </Container>
  );
};

export default signin;
