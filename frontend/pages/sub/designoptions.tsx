import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/layout/Container";
import { Operations } from "../../components/pageSpecific/products/Operations";
import { PageTitle } from "../../components/pageSpecific/products/PageTitle";

const links = [
  {
    name: "Exterior Finish",
    href: "",
  },
  {
    name: "Interior Finish",
    href: "",
  },
  {
    name: "Hardware",
    href: "",
  },
  {
    name: "Glass",
    href: "",
  },
  {
    name: "Screens",
    href: "",
  },
  {
    name: "Divided Lites",
    href: "",
  },
  {
    name: "Brickmold and Trim",
    href: "",
  },
];
const designoptions = () => {
  return (
    <Container space padding gap title="Design Options">
      <PageTitle
        title="Design Options"
        subtitle="Overview (all window and door design options)"
        links={links}
      >
        <p>Product Design Options (Overview)</p>
        <p>
          Deciding on the product that’s right for your project is just the
          beginning. With an extensive array of design options to choose from,
          you can customize your windows and doors to reflect your home’s
          architecture, character, and personality.
        </p>
      </PageTitle>
      <Operations title="Exterior Finish" subTitle="Product Design Options">
        <p>
          The choice of colour can have a big impact, or be a subtle accent to
          your home’s exterior. Select from our wide range of standard colour
          coating options, or request a custom colour match – the options are
          endless.
        </p>
      </Operations>
      <Operations title="Interior Finish" subTitle="Product Design Options">
        <p>
          White is the everyday standard of interior for products, though the
          choice is yours. Stand out and colour coat the interior, or clad it
          with either the clean look of Cellex, or select from our wood options
          to make a statement.
        </p>
      </Operations>
      <Operations title="Hardware" subTitle="Product Design Options">
        <p>
          Practical does not need to be boring. Quality and ease of use may be
          the most important aspects of your product’s hardware, but we offer
          different looks and finishes that complement your interior aesthetic
          and suit your taste.
        </p>
      </Operations>
      <Operations title="Glass" subTitle="Product Design Options">
        <p>
          Glass is a critical aspect of the function and aesthetic of your
          product. What do you want to achieve – added security and privacy, a
          certain look, or reduce your home’s energy costs?
        </p>
      </Operations>
      <Operations title="Screens" subTitle="Product Design Options">
        <p>
          Screens come in a variety of mesh and screenbar options to complete
          the customization of your products . New to our screen offerings is
          the FlexScreen for windows, and for entranceways, factory installed
          retractable screens.
        </p>
      </Operations>
      <Operations title="Divided Lites" subTitle="Product Design Options">
        <p>
          Add refinement to any glass surface with divided lites. Presented in a
          variety of patterns and in a range of materials and finishes, the
          details make the difference.
        </p>
      </Operations>
      <Operations title="Brickmold and Trim" subTitle="Product Design Options">
        <p>
          Exterior brickmold is available in an assortment of styles suitable
          for every application and aesthetic. Similarly, factory stained or
          painted trim is made to order and finished to match your interior for
          added convenience.
        </p>
      </Operations>
    </Container>
  );
};

export default designoptions;
