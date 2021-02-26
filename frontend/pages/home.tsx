import { useContext } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { GlobalContext } from "../context/context";
import TextWelcome from "../components/pageSpecific/home/TextWelcome";
import { Container } from "../components/layout/Container";
import Message from "../components/pageSpecific/home/Message";
import Category from "../components/pageSpecific/home/Category";

import { EnergyEfficiency } from "../components/pageSpecific/EnergyEfficiency";
import { Slugify } from "../lib/Stringer";
import { useUser } from "../components/auth/user";

const Home = (props) => {
  const { store, dispatch } = useContext(GlobalContext);
  const user = useUser();

  const { data, error, loading } = useQuery(CATEGORIES);

  return (
    <Container space title="Home" loading={loading}>
      <Context>
        <Welcome>
          <Left>
            <TextWelcome />
          </Left>

          <Right>
            <Link href="/contactus">Contact Us</Link>
            <Link href={user ? "/user/account" : "/user/signin"}>
              {user ? "Account" : "Dealer Login"}
            </Link>
          </Right>
        </Welcome>
        <Categories>
          <Message />
          {!loading &&
            data?.allProductCategories.map((category, index) => {
              return (
                <Category
                  title={category.name}
                  key={category.id}
                  subtitle={category.subtitle}
                  href={`/categories/${Slugify(category.name)}`}
                  image={category.image.publicUrl}
                  description={category.description}
                  rev={index! % 2 ? true : false}
                />
              );
            })}
        </Categories>
        <EnergyEfficiency />
      </Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  gap: calc(2 * var(--gap));
`;

const Welcome = styled.div`
  display: grid;
  padding: 0 var(--padding);
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    grid-template-columns: auto 25%;
    gap: calc(1.5 * var(--gap));
    padding: 0 var(--padding);
  }
`;

const Categories = styled.div`
  display: grid;
  gap: calc(2 * var(--gap));
`;

const Left = styled.div``;

const Right = styled.div`
  display: none;
  grid-auto-flow: row;
  align-items: end;
  align-content: end;
  gap: var(--gap);

  @media screen and (min-width: 768px) {
    display: grid;
    position: sticky;
    height: min-content;
    top: 500px;
  }
`;

const CATEGORIES = gql`
  query CATEGORIES {
    allProductCategories {
      id
      name
      subtitle
      description
      image {
        id
        filename
        publicUrl
      }
    }
  }
`;

export default Home;
