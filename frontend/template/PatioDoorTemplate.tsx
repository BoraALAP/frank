import React from "react";

import { Breadcrumbs } from "../components/pageSpecific/products/PageTitle";
import { Container } from "../components/layout/Container";

const SlidingDoorTemplate = ({ children, title }) => {
  const links = [
    {
      name: "Design Options",
      href: "/sub/designoptions",
    },
    {
      name: "Energy Efficiency",
      href: "/sub/learn",
    },
    {
      name: "Find a Dealer",
      href: "/sub/dealerfinder",
    },
  ];

  console.log("test");

  return (
    <Container space gap>
      <Breadcrumbs links={links} title={title} parent="Sliding Doors" />
      {children}
    </Container>
  );
};

export default SlidingDoorTemplate;
