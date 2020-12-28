import React from "react";
import styled from "./windows/node_modules/styled-components";

import CategoryTemplate from "../../template/CategoryTemplate";

import image1 from "../../assets/images/product/image1.jpg";
import image2 from "../../assets/images/product/image2.jpg";
import image3 from "../../assets/images/product/image3.jpg";
import image4 from "../../assets/images/product/image4.jpg";

const windows = () => {
  const pagetitle = "Windows";
  const links = [
    {
      name: "Entry Doors",
      href: "/products/entrydoors",
    },
    {
      name: "Patio Doors",
      href: "/products/patiodoors",
    },
    {
      name: "Design Options",
      href: "/sub/designoptions",
    },
  ];

  const products = [
    {
      title: "Core",
      subtitle: "Ideal for renovation or new construction",
      href: "/products/windows/core",
      image: image1,
      children: [
        "Rated Most efficient by Energy Star",
        "Warm edge spacers recessed between the panes of glass both minimize glass edge conductivity while optimally containing the argon gas within the sealed units, obtaining a 90% argon gas fill rate.",
      ],
    },
    {
      title: "Core+",
      subtitle: "Classic wood window design meets modern engineering",
      href: "/products/windows/coreplus",
      image: image2,
      side: true,
      children: [
        "Rated Most efficient by Energy Star",
        "Warm edge spacers recessed between the panes of glass both minimize glass edge conductivity while optimally containing the argon gas within the sealed units, obtaining a 90% argon gas fill rate.",
      ],
    },
    {
      title: "Enersense",
      subtitle: "Maximize your living space.",
      href: "/products/windows/enersense",
      image: image3,
      children: [
        "Rated Most efficient by Energy Star",
        "Warm edge spacers recessed between the panes of glass both minimize glass edge conductivity while optimally containing the argon gas within the sealed units, obtaining a 90% argon gas fill rate.",
      ],
    },
    {
      title: "Prism",
      subtitle: "More glass surface area for more light.",
      href: "/products/windows/prism",
      image: image4,

      side: true,
      children: [
        "Rated Most efficient by Energy Star",
        "Warm edge spacers recessed between the panes of glass both minimize glass edge conductivity while optimally containing the argon gas within the sealed units, obtaining a 90% argon gas fill rate.",
      ],
    },
  ];

  return (
    <CategoryTemplate pagetitle={pagetitle} products={products} links={links} />
  );
};

export default windows;
