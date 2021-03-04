import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../../layout/Container";

// import ccmc from "../../../public/certifying/ccmc.png"
// import energy_star from "../../../public/certifying/energy_star.png"
// import logofencan from "../../../public/certifying/logofencan.png"
// import qai from "../../../public/certifying/qai.png"
// import sawdac from "../../../public/certifying/sawdac.png"

const Certify = () => {
  return (
    <Content>
      <HR />
      <Container padding gap>
        <h3>Certifying Bodies </h3>
        <Cards>
          <Three>
            <Card>
              <Image
                src="/certifying/qai.png"
                layout="responsive"
                width={300}
                height={50}
                objectFit="contain"
                objectPosition="50% 50%"
                loading="lazy"
              />
              <p>
                Certifying Body Placeholder. SAWDAC Joins Allies to Advocate for
                Investment in Residential Retrofits for Post-Pandemic Economic
                Recovery
              </p>
            </Card>
            <Card>
              <Image
                src="/certifying/sawdac.png"
                layout="responsive"
                width={300}
                height={50}
                objectFit="contain"
                objectPosition="50% 50%"
                loading="lazy"
              />
              <p>
                Certifying Body Placeholder. SAWDAC Joins Allies to Advocate for
                Investment in Residential Retrofits for Post-Pandemic Economic
                Recovery
              </p>
            </Card>

            <Card>
              <Image
                src="/certifying/energy_star.png"
                layout="responsive"
                width={300}
                height={50}
                objectFit="contain"
                objectPosition="50% 50%"
                loading="lazy"
              />
              <p>
                Certifying Body Placeholder. SAWDAC Joins Allies to Advocate for
                Investment in Residential Retrofits for Post-Pandemic Economic
                Recovery
              </p>
            </Card>
          </Three>
          <Two>
            <Card>
              <Image
                src="/certifying/logofencan.png"
                layout="responsive"
                width={300}
                height={50}
                objectFit="contain"
                objectPosition="50% 50%"
                loading="lazy"
              />
              <p>
                Certifying Body Placeholder. SAWDAC Joins Allies to Advocate for
                Investment in Residential Retrofits for Post-Pandemic Economic
                Recovery
              </p>
            </Card>
            <Card>
              <Image
                src="/certifying/ccmc.png"
                layout="responsive"
                width={300}
                height={50}
                objectFit="contain"
                objectPosition="50% 50%"
                loading="lazy"
              />
              <p>
                Certifying Body Placeholder. SAWDAC Joins Allies to Advocate for
                Investment in Residential Retrofits for Post-Pandemic Economic
                Recovery
              </p>
            </Card>
          </Two>
        </Cards>
      </Container>
      <HR />
    </Content>
  );
};

const Content = styled.div`
  display: grid;
  gap: var(--gap);
`;

const HR = styled.hr`
  display: grid;
  height: 1px;
  border: 0;
  width: 95%;
  background-color: var(--color-gray);
`;

const Cards = styled.div`
  display: grid;
  grid-auto-flow: row;
  /* justify-content: start; */
  justify-content: space-around;
  gap: calc(2 * var(--gap));
  p {
    max-width: 400px;
  }
`;

const Card = styled.div`
  display: grid;
  gap: var(--gap);
  max-width: 400px;
`;

const Three = styled.div`
  display: grid;
  gap: calc(2 * var(--gap));
  justify-content: center;
  grid-auto-flow: row;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
  }
`;

const Two = styled.div`
  display: grid;
  gap: calc(2 * var(--gap));
  justify-content: center;
  grid-auto-flow: row;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
  }
`;

export default Certify;
