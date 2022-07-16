import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../layout/Container";
import dataSet from "../../../data/greener2.json";
import Table from "../learn/Table";
import Tabs from "../../global/Tabs";
import { PageTitle } from "../../layout/PageTitle";
import { LightBoxCross } from "../../../assets/icons/lightboxCross";
import { Info } from "../../../assets/icons/Info";

interface GreenProps {
  product?: string;
  id?: string;
}

export const GreenInitiative = ({ product, id }: GreenProps) => {
  const [showModal, setShowModal] = useState(false);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const data = dataSet.filter((item) => item.series === product);

  const newArray = data[0]?.types.map((item) => item.type);
  const productArray = dataSet.map((item) => item.series);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  if ((product && data.length > 0) || (!product && productArray.length > 0)) {
    return (
      <Container padding gap id={id}>
        <Title>
          <PageTitle
            title="Energy Savings Calculator"
            // subtitle="Energy Savings Calculator"
          >
            <div>
              <h4>
                How much energy can you save using energy efficient windows?{" "}
                <ATag
                  target="_blank"
                  rel="noopener"
                  href="https://www.cardinalcorp.com/technology/applications/energy-calculator/"
                >
                  Click Here
                </ATag>
              </h4>
            </div>
          </PageTitle>
          <Icon onClick={() => setShowModal(!showModal)}>
            <Info color="black" />
          </Icon>
        </Title>
        <Tabs
          tabs={product ? newArray : productArray}
          onClick={(e) => {
            setActiveTabIndex(e);
          }}
          active={activeTabIndex}
        />
        {product
          ? data[0]?.types.map((category, index) => {
              if (index === activeTabIndex) {
                return (
                  <Container key={index} gap>
                    <Table product data={category.options} />
                  </Container>
                );
              }
            })
          : dataSet.map((productItem, index) => {
              const productData = productItem.types
                .map((item) => {
                  return item.options.map((option) => {
                    return {
                      type: item.type === "" ? " " : item.type,
                      ...option,
                    };
                  });
                })
                .flat();

              if (index === activeTabIndex) {
                return (
                  <Container key={index} gap>
                    <Table data={productData} />
                  </Container>
                );
              }
            })}

        {showModal && (
          <ModalContainer>
            <Disclaimer>
              <Title>
                <h6>Please Note:</h6>
                <Icon onClick={() => setShowModal(false)}>
                  <LightBoxCross color="black" />
                </Icon>
              </Title>

              <p>
                Window U-Factor and SHGC are estimates based on center of glass
                properties and a typical operable size frame area with user
                selection of frame thermal performance level. These estimates
                should be used for comparative purposes only within the Cardinal
                website and analysis tools. Building energy codes require window
                manufacturer’s to rate U and SHGC per NFRC procedures
                (www.nfrc.org).
              </p>
              <p>
                Heating and cooling energy costs are estimated from regression
                analysis of building simulations using the REM/Design program
                (www.archenergy.com) and residential building insulation levels
                described in the{" "}
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://windows.lbl.gov/software/resfen/6/RESFEN60UserManual.pdf"
                >
                  Resfen User Guide.
                </a>
              </p>
              <p>
                Total window area is set at 18% of floor area for new
                construction, and 15% for existing houses. Window area
                distribution is assumed at 50% to the back, 10% on either end,
                and 30% to the front.
              </p>
              <p>
                House size, vintage, orientation, shade conditions, and energy
                costs are user inputs.
              </p>

              <p>
                Window comfort analysis is derived using ASHRAE Standard 55
                Thermal Environmental Conditions for Human Occupancy protocols
                (www.ashrae.org) and NFRC sponsored research “Window Performance
                for Human Thermal Comfort, February 2006”.
              </p>

              <p>
                ENERGY STAR compliance estimates are for windows only. Northern
                criteria will be effective in January of 2016, all other zones
                go into effect January 2015. Go to{" "}
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.energystar.gov/sites/default/files/ES_Final_V6_Residential_WDS_Spec.pdf"
                >
                  this PDF
                </a>{" "}
                to see the full set of requirements for windows, doors, and
                skylights.
              </p>
            </Disclaimer>
          </ModalContainer>
        )}
      </Container>
    );
  }
  return null;
};

const ATag = styled.a`
  text-decoration: underline;
  font-size: inherit;
  font-weight: inherit;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-sizing: border-box;
  padding: 160px 10vw 10vw;
`;

const Disclaimer = styled.div`
  background-color: var(--color-white);
  border-radius: var(--cardRadius);
  display: grid;
  gap: 0.5rem;
  padding: 2rem;
  height: 100%;
  overflow: scroll;
  box-sizing: border-box;
  p,
  a {
    font-size: 0.75rem;
  }
`;

const Icon = styled.button`
  display: grid;
  height: 32px;
  width: 32px;
  box-sizing: border-box;
  padding: 4px;
  z-index: 10;
`;
