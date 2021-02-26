import styled from "styled-components";
import { useEffect } from "react";
import Router from "next/router";

import { Container } from "../../components/layout/Container";
import SignInForm from "../../components/auth/SignInForm";
import { PageTitle } from "../../components/layout/PageTitle";
import { useUser } from "../../components/auth/user";

const signin = () => {
  const user = useUser();

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (user) {
      Router.push("/user/account");
    }
  }, [user]);

  return (
    <Container space padding gap title="Sign In">
      <PageTitle title="Sign In" />
      <SignInForm />
    </Container>
  );
};

export default signin;
