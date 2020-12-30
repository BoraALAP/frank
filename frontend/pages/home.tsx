import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import TextWelcome from "../components/pageSpecific/home/TextWelcome";
import { Container } from "../components/layout/Container";
import Message from "../components/pageSpecific/home/Message";
import Category from "../components/pageSpecific/home/Category";
import image4 from "../assets/images/homepage4.jpg";
import image5 from "../assets/images/homepage5.jpg";
import image6 from "../assets/images/homepage6.jpg";
import { EnergyEfficiency } from "../components/pageSpecific/EnergyEfficiency";

const ME = gql`
  query Operation {
    allOperations {
      id
      name
    }
  }
`;

const Home = (props) => {
  const { loading, error, data } = useQuery(ME);

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <Container space>
      <Context>
        <Welcome>
          <Left>
            <TextWelcome />
          </Left>

          <Right>
            <Link href="/">Contact Us</Link>
            <Link href="/">Dealer Login</Link>
            <p>
              Our story starts 35 years ago, with a commitment to quality that
              has remained family owned and operated. Learn more about us{" "}
              <Link href="/sub/frank">here.</Link>{" "}
            </p>
          </Right>
        </Welcome>
        <Categories>
          <Message />
          <Category1
            title="Windows"
            subtitle="Maximize your living space."
            href="/products/windows"
            image={image4}
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
            href="/products/entrydoor"
            image={image5}
            rev
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
            href="/products/slidingdoor"
            image={image6}
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
  padding: 0 ${({ theme }) => theme.padding};
  gap: ${({ theme }) => theme.gap};
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: auto 25%;
    gap: calc(1.5 * ${({ theme }) => theme.gap});
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
  @media (min-width: 480px) {
    display: grid;
  }
`;

export default Home;
