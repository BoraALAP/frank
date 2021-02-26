import { useEffect } from "react";
import Router from "next/router";

import { Container } from "../../components/layout/Container";
import { TertiaryButton } from "../../UI/Links";
import { PageTitle } from "../../components/layout/PageTitle";
import { useUser } from "../../components/auth/user";

const account = () => {
  const user = useUser();

  useEffect(() => {
    if (!user) {
      Router.push("/user/signin");
      return;
    }
  }, [user]);

  console.log(user);

  return (
    <Container space padding gap title="My Profile">
      <PageTitle title="Account" />
      <h4>Hello {user?.firstName}</h4>
      {user?.role?.name === "Dealer" && <p>Dealer Approved</p>}
      <TertiaryButton href="/user/signout">Sign Out</TertiaryButton>
    </Container>
  );
};

export default account;
