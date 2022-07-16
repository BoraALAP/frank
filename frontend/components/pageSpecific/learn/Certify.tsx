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
                QAI is a global powerhouse for independent third-party testing,
                inspection and certification. Our services cover an expansive
                list of industries and markets, and we take pride in being able
                to handle even the most demanding projects.
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
                SAWDAC Joins Allies to Advocate for Investment in Residential
                Retrofits for Post-Pandemic Economic Recovery
              </p>
              <p>
                Earlier this week, SAWDAC joined several other associations
                under the Efficiency Canada banner to make a direct appeal via a
                letter to the federal government about the potential role of the
                “energy efficiency sector” in Canada’s economic recovery in the
                wake of the pandemic. The focus of this appeal is on the role of
                home energy retrofits in job creation.
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
                ENERGY STAR is a voluntary U.S. Environmental Protection Agency
                (EPA) program that delivers environmental benefits and financial
                value through superior energy efficiency.
              </p>
            </Card>
          </Three>
          <Three>
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
                Members are part of a strong, supportive network of industry
                leaders where they can connect and learn from their peers, make
                valuable connections needed to expand business, and together set
                the stage for the future. We are your leading resource on all
                matters that impact the fenestration industry across Canada.
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
                The CCMC provides code compliance assessments either as an
                alternative solution, which uses a proprietary CCMC-developed
                set of criteria to establish code compliance, or as an
                acceptable solution, that verifies if a product meets a
                code-referenced product or material standard.
              </p>
            </Card>
            <Card>
              <Image
                src="/certifying/nfrc.png"
                layout="responsive"
                width={300}
                height={50}
                objectFit="contain"
                objectPosition="50% 50%"
                loading="lazy"
              />
              <p>
                The NFRC is an independent non-profit organization that
                establishes objective window, door, and skylight energy
                performance ratings to help you compare products and make an
                informed purchase.
              </p>
            </Card>
          </Three>
          <Two>
            <Card>
              <Image
                src="/certifying/ul.png"
                layout="responsive"
                width={300}
                height={50}
                objectFit="contain"
                objectPosition="50% 50%"
                loading="lazy"
              />
              <p>
                As a global safety science leader, we provide the expertise,
                insights and services necessary to achieve core business
                objectives. Our testing, inspection and certification, advisory
                and risk management services, decision-making tools, training
                and business intelligence offerings help our customers, based in
                more than 100 countries, solve their critical business
                challenges and prepare for future opportunities.
              </p>
            </Card>
            <Card>
              <Image
                src="/certifying/nafs.png"
                layout="responsive"
                width={300}
                height={50}
                objectFit="contain"
                objectPosition="50% 50%"
                loading="lazy"
              />
              <p>
                Performance Grade is a numeric designator that defines a
                specific set of NAFS-specified product performance requirements
                for a specific Design Pressure (DP) range as required by
                conditions at the intended location of the building.
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
