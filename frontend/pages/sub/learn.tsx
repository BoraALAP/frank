import styled from "styled-components";
// import { gql, useQuery } from "@apollo/client";

import { Container } from "../../components/layout/Container";
import { DesignOptions } from "../../components/pageSpecific/EnergyEfficiency";
import { PageTitle } from "../../components/layout/PageTitle";
import { TwoColumn } from "../../UI/TwoColumn";
import { Body } from "../../components/layout/Body";
import Certify from "../../components/pageSpecific/learn/Certify";
import { GreenInitiative } from "../../components/pageSpecific/products/GreenInitiative";
import { OntarioMade } from "../../components/pageSpecific/learn/OntarioMade";

const learn = () => {
  // const { loading, error, data } = useQuery(OPERATION_QUERY);

  const links = [
    { name: "U-Factor", to: "ufactor" },
    { name: "Solar Heat Gain", to: "solarheatgain" },
    {
      name: "Visible Transmittance",
      to: "visibletransmittance",
    },
    { name: "Ontario Made", to: "ontarioMade" },
    { name: "Energy Star", to: "energystar" },
    // { name: "Design Options", href: "/designoptions" },
    { name: "Energy Calculator", to: "energyCalculator" },
  ];

  return (
    <Container space title="Learn">
      <Context>
        <PageTitle title="Learn" links={links} padding>
          <Body>
            <>
              There are many benefits to energy efficient windows and doors.
              Aside from having better control over your home’s interior climate
              and living more comfortably in the space, you are lessening
              utility costs, and ultimately reducing your carbon footprint.
            </>

            <>
              In simplest terms, the glass, the product’s construction, and the
              installation all play critical roles in limiting the amount of
              heat that enters and escapes your home.
            </>

            <>
              Frank™ products are ENERGY STAR rated and provide ratings designed
              to indicate a window or door’s efficiency. There are several terms
              that will better educate you, and lead to a better understanding
              of a product’s effectiveness in insulating and blocking heat from
              the sun, among other things.
            </>
          </Body>
        </PageTitle>
        <TwoColumn imageSrc="/learn1.jpg" rev id="ufactor">
          <h4>U-Factor</h4>
          <p>
            How well do your windows and doors keep heat inside your home? Well,
            U-FACTOR measures the ability of heat to travel from the inside of
            your home to the outside air. The rule of thumb is that lower the
            number, the greater the insulating potential. For our Canadian
            climates, U-FACTOR is especially important given how many cold days
            we get depending on your geographic location.
          </p>
        </TwoColumn>

        <TwoColumn imageSrc="/learn2.jpg">
          <div>
            <h4 id="solarheatgain">Solar Heat Gain</h4>
            <p>
              How much do your windows and doors allow heat to pass into your
              home? Essentially the opposite of U-FACTOR, SOLAR HEAT GAIN
              COEFFICIENT (SHGC) measures how much radiant heat enters your
              home. Again, rule of thumb, the lower the number the less heat
              that is allowed to enter the better. With that said, the exception
              to the rule would be extreme cold regions that may benefit from a
              higher SHGC.
            </p>
          </div>
          <div>
            <h4 id="visibletransmittance">Visible Transmittance</h4>
            <p>
              Light must pass through a pane of glass before it enters the home.
              VISIBLE TRANSMITTANCE is the amount of light that transfers
              through that glass unit. Low E coatings can limit that amount of
              SHGC without reducing the amount of visible light to pass through.
            </p>
            <a
              href="https://www.cardinalcorp.com/technology/case-studies/"
              target="_blank"
              rel="nofollow"
            >
              For more information click here
            </a>
          </div>
        </TwoColumn>
        <OntarioMade id="ontarioMade" />

        <PageTitle title="Energy Star" padding id="energystar" />
        <TwoColumn imageSrc="/learn3.jpg" rev>
          <div>
            <h4>Save Money - And More</h4>
            <p>
              Installing ENERGY STAR certified windows, and doors lowers energy
              bills and saves you money. With more efficient windows, you also
              use less energy, which reduce greenhouse gas emissions from power
              plants and homes
            </p>
          </div>
          <div>
            <h4>Get Comfortable</h4>
            <p>
              Put an end to cold drafts and overheated spaces. ENERGY STAR
              certified windows and doors keep your home’s temperature
              consistently comfortable. Even your loveseat right by the window
              can be cozy with ENERGY STAR.
            </p>
          </div>
        </TwoColumn>
        <TwoColumn imageSrc="/learn4.jpg">
          <>
            <h4>Protect Your Valuables</h4>
            <p>
              Low-emissivity coatings on many ENERGY STAR certified windows and
              doors reduces UV sun that leads to damaged floors, and faded
              carpets and furniture.
            </p>
          </>
          <>
            <h4>Certified Performance</h4>
            <p>
              ALL ENERGY STAR windows and doors are certified and verified to
              perform as labeled.
            </p>
          </>
        </TwoColumn>

        <Certify />
        {/* <DesignOptions /> */}
        {/* !Fixme: Add the design options image as stand alone */}
        <GreenInitiative id="energyCalculator" />
      </Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  gap: calc(4 * var(--gap));
`;

// const OPERATION_QUERY = gql`
//   query Category {
//     allProductCategories {
//       name
//       id
//       operations {
//         id
//         name
//         image {
//           id
//           publicUrl
//           originalFilename
//         }
//         video
//         products {
//           id
//           name
//         }
//       }
//     }
//   }
// `;

export default learn;
