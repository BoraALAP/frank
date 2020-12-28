import React from "react";

import CategoryTemplate from "../../template/CategoryTemplate";

import image1 from "../../assets/images/product/image1.jpg";
import image2 from "../../assets/images/product/image2.jpg";
import image3 from "../../assets/images/product/image3.jpg";

const entrydoors = () => {
  const pagetitle = "Entry Doors";
  const links = [
    {
      name: "Patio Doors",
      href: "/products/patiodoors",
    },
    {
      name: "Windows",
      href: "/products/windows",
    },
    {
      name: "Design Options",
      href: "/sub/designoptions",
    },
  ];
  const products = [
    {
      title: "Modo",
      subtitle: "Smooth fibreglass doors available in a range of options.",
      href: "/products/entrydoors/modo",
      image: image1,
      children: [
        "For a simple replacement or add some style to your front facade.",
        "Expansive selection of glass configurations in flush glazed and modern door lite designs.",
        "Choose to add a punch of colour, and make this a showstopper entrance way.",
      ],
    },
    {
      title: "Classic",
      subtitle: "Mahogany and Oak grain in all the traditional styles.",
      href: "/products/entrydoors/classic",
      image: image2,
      side: true,
      children: [
        "The industry leading fibreglass door with ultra realistic wood grain technology.",
        "Expansive selection of glass configurations in flush glazed and modern door lite designs.",
        "The look and feel of a real wood door with all the upside.",
      ],
    },
    {
      title: "Artisan",
      subtitle: "Mixing Old World values with New World technology and design.",
      href: "/products/entrydoors/artisan",
      image: image3,
      children: [
        "Available in a range of styles and finishes that fool the eye -- Mahogany, Oak, Fir, Rustic, and Canvas.",
        "Superior quality construction and detailed craftsmanship that allows for 10% more glass than other entry door lines, and a clean hard edge that further mimics real wood.",
        "The handcrafted elegance of another era for today’s homeowner.",
      ],
    },
  ];

  return (
    <CategoryTemplate pagetitle={pagetitle} products={products} links={links} />
  );
};

export default entrydoors;
