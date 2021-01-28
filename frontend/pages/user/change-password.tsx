import { useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";

import { useAuth } from "../../lib/Authentication";

import ChangePasswordForm from "../../components/auth/ChangePasswordForm";
import { Container } from "../../components/layout/Container";

const changepassword = ({ token, accessedAt }) => {
  const { isAuthenticated } = useAuth();
  console.log(token);

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/home");
    }
  }, [isAuthenticated]);

  return (
    <Container space padding title="Change Password">
      <h4>Change password</h4>
      <ChangePasswordForm token={token} accessedAt={accessedAt} />
    </Container>
  );
};

changepassword.getInitialProps = async (context) => {
  const token = context.query.key || "8dd5bae3-fb95-4a4e-b3e5-cf09468f7d54";
  const accessedAt = new Date().toISOString();
  return { token, accessedAt };
};

export default changepassword;
