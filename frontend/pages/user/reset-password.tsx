import { useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";

import ResetPasswordForm from "../../components/auth/ResetPasswordForm";
import { Container } from "../../components/layout/Container";
import { PageTitle } from "../../components/layout/PageTitle";
import { useUser } from "../../components/auth/user";
import RequestResetForm from "../../components/auth/RequestResetForm";

const resetpassword = ({ query }) => {
  const user = useUser();

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (user) {
      Router.push("/home");
    }
  }, [user]);

  if (!query?.token) {
    return (
      <Container space padding gap title="Reset Password">
        <PageTitle title="Reset Password" />
        <Content>
          <h4>Sorry you don't have a token, please request a new one.</h4>
          <RequestResetForm />
        </Content>
      </Container>
    );
  }

  return (
    <Container space padding gap title="Reset Password">
      <PageTitle title="Reset Password" />
      <ResetPasswordForm token={query.token} />
    </Container>
  );
};

export default resetpassword;

const Content = styled.div`
  display: grid;
  gap: var(--gap);
`;
