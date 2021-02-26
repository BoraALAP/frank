import styled from "styled-components";
import { useEffect } from "react";
import Router from "next/router";

import { Container } from "../../components/layout/Container";
import RequestResetForm from "../../components/auth/RequestResetForm";
import { PageTitle } from "../../components/layout/PageTitle";
import { useUser } from "../../components/auth/user";

const forgotpassword = () => {
  const user = useUser();

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (user) {
      Router.push("/home");
    }
  }, [user]);

  return (
    <Container space padding gap title="Forgot Password">
      <PageTitle title="Forgot Password" />
      <RequestResetForm />
    </Container>
  );
};

export default forgotpassword;
