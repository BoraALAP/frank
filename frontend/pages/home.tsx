import { useContext } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { GlobalContext } from "../context/context";
import TextWelcome from "../components/pageSpecific/home/TextWelcome";
import { Container } from "../components/layout/Container";

import Category from "../components/pageSpecific/home/Category";

import { DesignEfficiency } from "../components/pageSpecific/EnergyEfficiency";
import { Slugify } from "../lib/Stringer";
import { useUser } from "../components/auth/user";
import { ProductCard } from "../components/pageSpecific/products/ProductCard";
import { FeaturedCard } from "../components/pageSpecific/home/FeaturedCard";
import HighlightedPage from "../components/pageSpecific/home/HighlightedPage";

const Home = (props) => {
  const { store, dispatch } = useContext(GlobalContext);
  const user = useUser();

  const { data, error, loading } = useQuery(CATEGORIES);

  return (
    <Container space title="Home" loading={loading}>
      <Context>
        <Welcome>
          <Left>
            <TextWelcome message={data?.allHomePages[0].enterenceMessage} />
          </Left>

          <Right>
            <Link href="/contactus">Contact Us</Link>
            <Link href={user ? "/user/account" : "/user/signin"}>
              {user ? "Account" : "Dealer Login"}
            </Link>
          </Right>
        </Welcome>
        <Link href={`/${data?.allHomePages[0].pageHighlightUrl}`} passHref>
          <a>
            <HighlightedPage page={data?.allHomePages[0]} />
          </a>
        </Link>
        {data?.allProducts.length > 0 && (
          <Featured>
            <Container padding>
              <h2>
                {data?.allProducts.length > 1
                  ? "Featured Products"
                  : "Featured Product"}{" "}
              </h2>
            </Container>
            {data?.allProducts.map((product, index) => {
              if (!product.hide) {
                return (
                  <FeaturedCard
                    product={product}
                    side={index! % 2 && true}
                    key={product.id}
                  />
                );
              }
            })}
          </Featured>
        )}
        <Categories>
          <Container padding>
            <h2>Product Categories</h2>
          </Container>
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
        <DesignEfficiency />
      </Context>
    </Container>
  );
};

const Featured = styled.div`
  display: grid;
  gap: calc(var(--gap) * 2);
`;

const Context = styled.div`
  display: grid;
  gap: calc(3 * var(--gap));
`;

const Welcome = styled.article`
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

const Right = styled.aside`
  display: none;
  grid-auto-flow: row;
  align-items: end;
  align-content: end;
  gap: var(--gap);

  @media screen and (min-width: 768px) {
    display: grid;
    position: sticky;
    height: min-content;
    top: 170px;
  }
`;

const CATEGORIES = gql`
  query CATEGORIES {
    allHomePages {
      enterenceMessage
      pageHighlightImage {
        originalFilename
        publicUrl
      }
      pageHighlightTitle
      pageHighlightCopy
      pageHighlightUrl
    }
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
    allProducts(where: { featured: true }) {
      id
      name
      subtitle
      excerpt
      image {
        publicUrl
        originalFilename
      }
      featuredTitle
      featuredSubtitle
      featuredImage {
        publicUrl
        originalFilename
      }
    }
  }
`;

export default Home;
