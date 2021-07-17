import { useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";

import { Container } from "../../components/layout/Container";
import { ListLink, TertiaryButton } from "../../UI/Links";
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

  return (
    <Container space padding gap title="My Profile">
      <PageTitle title="Account" />
      <h2>Hello {user?.firstName}</h2>
      {user?.role?.dealer && (
        <ListContainer>
          <h6>Dealer Brochures</h6>
          <List>
            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+2900+EN+(14-Jan-21).pdf">
              SV 2900 En
            </ListLink>
            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+2900+Hybrid+EN+(14-Jan-21).pdf">
              SV 2900 Hybrid
            </ListLink>
            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/Sunview-Patio-Doors-Warranty.pdf">
              Sunview Patio Doors Warranty
            </ListLink>
            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/Sunview+Vinyl+Victorian+EN+(06-Nov-20).pdf">
              Sunview Vinyl Victorian
            </ListLink>
            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+Brighton+EN+(31-Aug-20).pdf">
              SV Brighton
            </ListLink>

            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+Buckingham+1000+EN+(06-Nov-20).pdf">
              SV Buckingham 1000
            </ListLink>

            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+Essex+EN+(14-Jan-21).pdf">
              SV Essex
            </ListLink>

            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+Kent+EN+(16-Sep-20).pdf">
              SV Kent
            </ListLink>

            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+Muskoka+EN+(31-Aug-20).pdf">
              SV Muskoka
            </ListLink>

            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+Newcastle+EN+(14-Jan-21).pdf">
              SV Newcastle
            </ListLink>

            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV+Windsor+EN+(31Aug20).pdf">
              SV Windsor
            </ListLink>

            <ListLink href="https://s3.amazonaws.com/frank.com/dealerportal/SV1200+EN+(14-Jan-21).pdf">
              SV1200
            </ListLink>
          </List>
        </ListContainer>
      )}
      <TertiaryButton href="/user/signout">Sign Out</TertiaryButton>
    </Container>
  );
};

const ListContainer = styled.div`
  display: grid;
  gap: calc(var(--gap) / 2);
  max-width: 600px;
`;

const List = styled.div`
  display: grid;
  gap: calc(var(--gap) / 4);
  a {
    color: var(--color-grey);
    font-weight: 300;
  }
`;

export default account;
