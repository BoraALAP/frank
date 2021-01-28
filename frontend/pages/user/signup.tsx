import styled from "styled-components";
import SignUpForm from "../../components/auth/SignUpForm";
import { Container } from "../../components/layout/Container";

const signup = () => {
  return (
    <Container space padding title="Sign Up">
      <SignUpForm />
    </Container>
  );
};

export default signup;
