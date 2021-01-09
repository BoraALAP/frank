import styled from "styled-components";

import CategoryTemplate from "../../template/CategoryTemplate";

const windows = () => {
  const pagetitle = "Windows";
  const links = [
    {
      name: "Entry Doors",
      href: "/products/entrydoors",
    },
    {
      name: "Sliding Doors",
      href: "/products/slidingdoors",
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
      image: "/product/image1.jpg",
      children: [
        "Rated Most efficient by Energy Star",
        "Warm edge spacers recessed between the panes of glass both minimize glass edge conductivity while optimally containing the argon gas within the sealed units, obtaining a 90% argon gas fill rate.",
      ],
    },
    {
      title: "Core+",
      subtitle: "Classic wood window design meets modern engineering",
      href: "/products/windows/coreplus",
      image: "/product/image2.jpg",
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
      image: "/product/image3.jpg",
      children: [
        "Rated Most efficient by Energy Star",
        "Warm edge spacers recessed between the panes of glass both minimize glass edge conductivity while optimally containing the argon gas within the sealed units, obtaining a 90% argon gas fill rate.",
      ],
    },
    {
      title: "Prism",
      subtitle: "More glass surface area for more light.",
      href: "/products/windows/prism",
      image: "/product/image4.jpg",

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
