import styled from "styled-components";
import SignUpForm from "../../components/auth/SignUpForm";
import { Container } from "../../components/layout/Container";
import { PageTitle } from "../../components/layout/PageTitle";

const signup = () => {
  return (
    <Container space padding gap title="Sign Up">
      <PageTitle title="Sign Up" />
      <SignUpForm />
    </Container>
  );
};

export default signup;
