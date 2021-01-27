import { useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import { useAuth } from "../../lib/Authentication";
import { Container } from "../../components/layout/Container";
import { TertiaryButton } from "../../UI/Links";
import signout from "./signout";
import { Loading } from "../../UI/Loading";

const account = () => {
  const { signout, isAuthenticated, isLoading, user } = useAuth();
  const onSignout = (event) => {
    event.preventDefault();
    signout();
  };
  console.log(user);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      Router.push("/user/signin");
      return;
    }
  }, [isAuthenticated]);

  if (!user) {
    return <Loading />;
  }

  return (
    <Container space padding>
      <h2>Account</h2>
      <h4>Hello {user.name}</h4>
      <p>
        Last Login{" "}
        {moment(user.lastLogin).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>

      <TertiaryButton onClick={onSignout} href="/user/signout">
        Sign Out
      </TertiaryButton>
    </Container>
  );
};

export default account;
