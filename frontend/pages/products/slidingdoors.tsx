

import CategoryTemplate from "../../template/CategoryTemplate";

import image1 from "../../assets/images/product/image1.jpg";
import image2 from "../../assets/images/product/image2.jpg";
import image3 from "../../assets/images/product/image3.jpg";
import image4 from "../../assets/images/product/image4.jpg";

const slidingdoors = () => {
  const pagetitle = "Sliding Doors";
  const links = [
    {
      name: "Windows",
      href: "/products/windows",
    },
    {
      name: "Entry Doors",
      href: "/products/entrydoors",
    },

    {
      name: "Design Options",
      href: "/sub/designoptions",
    },
  ];

  const products = [
    {
      title: "Moose",
      subtitle: "Strong, sturdy, and dependable.",
      href: "/products/slidingdoors/moose",
      image: image1,
      children: [
        "Frame depth 5 ⅝” with interior and exterior jamb pocket cover for clean finish.",
        "Contemporary handle options, added security features, and twin point lock comes standard.",
        "3” proprietary heavy-duty screen.",
      ],
    },
    {
      title: "Moose+",
      subtitle: "Elevated function and feel.",
      href: "/products/slidingdoors/mooseplus",
      image: image2,
      side: true,
      children: [
        "Deeper 5 ⅞” frame depth with interior and exterior jamb pocket cover for clean finish.",
        "The sill looks and performs better than anything on the market, with a specially designed aluminum sill plate cover, and a sub-sill drainage system.",
        "All doors 8’ and wider come standard with steel header reinforcement that allows for smoother operation, and have an engineered anti lift block for added security.",
      ],
    },
    {
      title: "Orchestra Door",
      subtitle: "A modern look for everyone.",
      href: "/products/slidingdoors/orchestradoor",
      image: image4,
      children: [
        "Solid frame and sash construction with 7 ¼” frame depth and a 2 ¼” thick sashes.",
        "High performance roller system for smooth operation and designed for larger openings.",
        "Superior energy efficiency and high performance ratings.",
      ],
    },
    {
      title: "Folding Door",
      subtitle: "Bifold",
      href: "/products/slidingdoors/foldingdoor",
      image: image3,
      side: true,
      children: [
        "Multiple configurations available that can accommodate up to 24 ft wide and 10 ft tall.",
        "Highest quality stainless steel hinge and roller hardware, complimented by a European handle hardware and locking system that comes in variety of finishes.",
        "Engineered no other folding door -- with structural steel reinforced sashes.",
        "Creates a seamless transition to the outdoors.",
      ],
    },
    {
      title: "Lift and Slide",
      subtitle: "Trending today, for tomorrow’s architecture.",
      href: "/products/slidingdoors/liftandslide",
      image: image3,
      children: [
        "The industry’s largest 2 panel offering for a sliding door with unparalleled energy efficiency and performance ratings.",
        "Multi-point locking system and upgraded European hardware that can accommodate both dual and triple-glazed units comes standard.",
        "Ultra smooth and finger tip easy panel operation.",
      ],
    },
  ];

  return (
    <CategoryTemplate pagetitle={pagetitle} products={products} links={links} />
  );
};

export default slidingdoors;
