import styled from "styled-components";
import { useEffect } from "react";
import Router from "next/router";

import { useAuth } from "../../lib/Authentication";

import { Container } from "../../components/layout/Container";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

const forgotpassword = ({ onSuccess, onClickSignin }) => {
  const { isAuthenticated } = useAuth();

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/home");
    }
  }, [isAuthenticated]);

  return (
    <Container space padding>
      <ForgotPasswordForm />
    </Container>
  );
};

export default forgotpassword;