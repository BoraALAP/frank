import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/layout/Container";
import { Operations } from "../../components/pageSpecific/products/Operations";
import { gql, useQuery } from "@apollo/client";
import { NavLinks } from "../../UI/Links";

const designoptions = () => {
  const { data } = useQuery(OPTIONS);

  const [display, setDisplay] = useState("");

  const links = [
    {
      name: "Exterior Finish",
    },
    {
      name: "Interior Finish",
    },
    {
      name: "Hardware",
    },
    {
      name: "Glass",
    },
    {
      name: "Screens",
    },
    {
      name: "Divided Lites",
    },
    {
      name: "Brickmould and Trim",
    },
  ];

  return (
    <Container space gap title="Design Options">
      <Container padding>
        <Context twoColumn>
          <h1>Design Options</h1>
          <h3>Overview (all window and door design options)</h3>
          <Bottom twoColumn>
            <div>
              <p>Product Design Options (Overview)</p>
              <p>
                Deciding on the product that’s right for your project is just
                the beginning. With an extensive array of design options to
                choose from, you can customize your windows and doors to reflect
                your home’s architecture, character, and personality.
              </p>
            </div>
            <Links>
              {links.map((item, index) => (
                <NavLinks key={index} onClick={() => setDisplay(item.name)}>
                  {item.name}
                </NavLinks>
              ))}
            </Links>
          </Bottom>
        </Context>
      </Container>
      {display === "Exterior Finish" && (
        <Operations
          title="Exterior Finish"
          subTitle="Product Design Options"
          list={data?.allExteriorOptions}
        >
          <p>
            The choice of colour can have a big impact, or be a subtle accent to
            your home’s exterior. Select from our wide range of standard colour
            coating options, or request a custom colour match – the options are
            endless.
          </p>
        </Operations>
      )}
      {display === "Interior Finish" && (
        <Operations
          title="Interior Finish"
          subTitle="Product Design Options"
          list={data?.allInteriorOptions}
        >
          <p>
            White is the everyday standard of interior for products, though the
            choice is yours. Stand out and colour coat the interior, or clad it
            with either the clean look of Cellex, or select from our wood
            options to make a statement.
          </p>
        </Operations>
      )}
      {display === "Hardware" && (
        <Operations title="Hardware" subTitle="Product Design Options">
          <p>
            Practical does not need to be boring. Quality and ease of use may be
            the most important aspects of your product’s hardware, but we offer
            different looks and finishes that complement your interior aesthetic
            and suit your taste.
          </p>
        </Operations>
      )}
      {display === "Glass" && (
        <Operations
          title="Glass"
          subTitle="Product Design Options"
          list={data?.allGlassOptions}
        >
          <p>
            Glass is a critical aspect of the function and aesthetic of your
            product. What do you want to achieve – added security and privacy, a
            certain look, or reduce your home’s energy costs?
          </p>
        </Operations>
      )}
      {display === "Screens" && (
        <Operations title="Screens" subTitle="Product Design Options">
          <p>
            Screens come in a variety of mesh and screenbar options to complete
            the customization of your products . New to our screen offerings is
            the FlexScreen for windows, and for entranceways, factory installed
            retractable screens.
          </p>
        </Operations>
      )}
      {display === "Divided Lites" && (
        <Operations
          title="Divided Lites"
          subTitle="Product Design Options"
          list={data?.allDividedLiteOptions}
        >
          <p>
            Add refinement to any glass surface with divided lites. Presented in
            a variety of patterns and in a range of materials and finishes, the
            details make the difference.
          </p>
        </Operations>
      )}
      {display === "Brickmould and Trim" && (
        <Operations
          title="Brickmould and Trim"
          subTitle="Product Design Options"
          list={data?.allBrickmoldAndTrimOptions}
        >
          <p>
            Exterior brickmold is available in an assortment of styles suitable
            for every application and aesthetic. Similarly, factory stained or
            painted trim is made to order and finished to match your interior
            for added convenience.
          </p>
        </Operations>
      )}
    </Container>
  );
};

export default designoptions;

const Links = styled.div`
  display: grid;
`;

const Context = styled.div`
  display: grid;

  padding: 0 ${(props) => (props.padding ? `var(--padding)` : "0")};
  gap: ${(props) => (props.twoColumn ? `var(--gap)` : `calc( var(--gap) / 2)`)};
  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.twoColumn ? "none" : "auto 25%"};
    align-items: baseline;
  }

  h1 {
    grid-column: ${(props) => (props.subtitle ? "1 / -1" : "inherit")};
  }
`;

const Bottom = styled.div`
  display: grid;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.twoColumn ? "auto 25%" : "none"};
    align-items: baseline;
  }
`;

const OPTIONS = gql`
  query OPTIONS {
    allExteriorOptions {
      id
      name
      image
      description
    }
    allInteriorOptions {
      id
      name
      image
      description
    }
    allGlassOptions {
      id
      name
      image
      description
    }
    allDividedLiteOptions(sortBy: name_ASC) {
      id
      name
      image
      description
    }
    allBrickmoldAndTrimOptions {
      id
      name
      image
      description
    }
  }
`;
