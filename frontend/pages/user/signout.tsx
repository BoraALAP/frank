import { useEffect } from "react";
import Router from "next/router";

import { useAuth } from "../../lib/Authentication";
import { Container } from "../../components/layout/Container";

const signout = () => {
  const { isAuthenticated, signout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      Router.push("/home");
      return;
    }
    signout();
  }, [isAuthenticated]);

  return (
    <>
      <Container space padding>
        <p>Signing you out...</p>
      </Container>
    </>
  );
};

export default signout;
