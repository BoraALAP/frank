import { useContext } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { GlobalContext } from "../context/context";
import TextWelcome from "../components/pageSpecific/home/TextWelcome";
import { Container } from "../components/layout/Container";
import Message from "../components/pageSpecific/home/Message";
import Category from "../components/pageSpecific/home/Category";
import { useAuth } from "../lib/Authentication";

import { EnergyEfficiency } from "../components/pageSpecific/EnergyEfficiency";

const Home = (props) => {
  const { store, dispatch } = useContext(GlobalContext);
  const { isAuthenticated } = useAuth();

  return (
    <Container space>
      <Context>
        <Welcome>
          <Left>
            <TextWelcome />
          </Left>

          <Right>
            <Link href="/contactus">Contact Us</Link>
            <Link href={isAuthenticated ? "/user/account" : "/user/signin"}>
              {isAuthenticated ? "Account" : "Dealer Login"}
            </Link>
            {/* <p>
              Our story starts 35 years ago, with a commitment to quality that
              has remained family owned and operated. Learn more about us{" "}
              <Link href="/sub/frank">here.</Link>{" "}
            </p> */}
          </Right>
        </Welcome>
        <Categories>
          <Message />
          <Category1
            title="Windows"
            subtitle="Maximize your living space."
            href="/products/windows"
            image="/homepage4.jpg"
            rev
          >
            <p>Rated Most efficient by Energy Star</p>

            <p>
              Warm edge spacers recessed between the panes of glass both
              minimize glass edge conductivity while optimally containing the
              argon gas within the sealed units, obtaining a 90% argon gas fill
              rate
            </p>
          </Category1>
          <Category2
            title="Entry Door"
            subtitle="Maximize your living space."
            href="/products/entrydoors"
            image="/homepage5.jpg"
          >
            <p>Rated Most efficient by Energy Star</p>

            <p>
              Warm edge spacers recessed between the panes of glass both
              minimize glass edge conductivity while optimally containing the
              argon gas within the sealed units, obtaining a 90% argon gas fill
              rate
            </p>
          </Category2>
          <Category3
            title="Sliding Doors"
            subtitle="Maximize your living space."
            href="/products/slidingdoors"
            image="/homepage6.jpg"
            rev
          >
            <p>Rated Most efficient by Energy Star</p>

            <p>
              Warm edge spacers recessed between the panes of glass both
              minimize glass edge conductivity while optimally containing the
              argon gas within the sealed units, obtaining a 90% argon gas fill
              rate
            </p>
          </Category3>
        </Categories>
        <EnergyEfficiency />
      </Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  gap: calc(2 * ${({ theme }) => theme.gap});
`;

const Welcome = styled.div`
  display: grid;
  padding: 0 ${({ theme }) => theme.paddingSm};
  gap: ${({ theme }) => theme.gap};
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: auto 25%;
    gap: calc(1.5 * ${({ theme }) => theme.gap});
    padding: 0 ${({ theme }) => theme.padding};
  }
`;

const Categories = styled.div`
  display: grid;
  gap: calc(2 * ${({ theme }) => theme.gap});
`;

const Category1 = styled(Category)`
  display: grid;
  z-index: 1;
`;

const Category2 = styled(Category)`
  display: grid;
  z-index: 2;
`;

const Category3 = styled(Category)`
  display: grid;
  z-index: 3;
`;

const Left = styled.div``;

const Right = styled.div`
  display: none;
  grid-auto-flow: row;
  align-items: end;
  align-content: end;
  gap: ${({ theme }) => theme.gap};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    display: grid;
    position: sticky;
    height: min-content;
    top: 500px;
  }
`;

const ME = gql`
  query Operation {
    allOperations {
      id
      name
    }
  }
`;

export default Home;
