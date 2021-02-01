import { useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";

import { useAuth } from "../../lib/Authentication";

import ChangePasswordForm from "../../components/auth/ChangePasswordForm";
import { Container } from "../../components/layout/Container";
import { PageTitle } from "../../components/pageSpecific/products/PageTitle";

const changepassword = ({ token, accessedAt }) => {
  const { isAuthenticated } = useAuth();

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/home");
    }
  }, [isAuthenticated]);

  return (
    <Container space padding gap title="Change Password">
      <PageTitle title="Change Password" />
      <ChangePasswordForm token={token} accessedAt={accessedAt} />
    </Container>
  );
};

changepassword.getInitialProps = async (context) => {
  const token = context.query.key;
  const accessedAt = new Date().toISOString();
  return { token, accessedAt };
};

export default changepassword;
