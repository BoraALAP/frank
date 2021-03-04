import { useEffect } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";

import { Container } from "../../components/layout/Container";
import {
  CURRENT_USER_QUERY,
  SIGNOUT,
  useUser,
} from "../../components/auth/user";

const signout = () => {
  const user = useUser();
  const [signOut, { data, error }] = useMutation(SIGNOUT, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  useEffect(() => {
    signOut();
  }, []);

  useEffect(() => {
    if (!user || data?.endSession) {
      Router.push("/home");
      return;
    }
  }, [user, data]);

  return (
    <>
      <Container space padding title="Sign Out">
        <p>Signing you out...</p>
      </Container>
    </>
  );
};

export default signout;
