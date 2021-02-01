import styled from "styled-components";
import { ImageOverlap } from "../../../components/pageSpecific/products/ImageOverlap";
import WindowsTemplate from "../../../template/WindowsTemplate";

const coreplus = () => {
  return (
    <WindowsTemplate
      title="Core+"
      imageOverlapDetailsTitle="Our most versatile "
      imageOverlapDetailsChildren={[
        "4 9/16” vinyl frame with built in nosing",
        "Thicker exterior sash walls (.090” versus .068”)",
        "Rated Most efficient by Energy Star",
        "Internal steel reinforcement channel to ensure optimal performance and operation for larger windows.",
        "Mullion reinforcement pocket to facilitate structural reinforcement when combining large units",
        "Engineered for bigger openings",
        "Internal steel reinforcement channel to ensure optimal performance and operation for larger windows.",
        "Mullion reinforcement pocket to facilitate structural reinforcement when combining large units.",
        "Available with true triple pane, 1 3/8” glazing for optimal performance & sound",
        "Heavy duty hinge for larger triple pane units",
        "Santoprene bulb seals improve sash/bulb contact area for a consistent seal and improved performance",
        "Ideal for renovation or new construction (new construction we recommend a brickmould be applied)",
      ]}
      imageOverlapImageSrc="/product/core.png"
      imageOverlapImageTitle="Missing"
      imageOverlapImageChildren={["Missing"]}
      threeImagesProductImage1="/product/productImage1.jpg"
      threeImagesProductImage2="/product/productImage2.jpg"
      threeImagesProductImage3="/product/productImage3.jpg"
      threeImagesTitle="Missing"
      threeImagesDescription={["Missing"]}
    />
  );
};

const Container = styled.div`
  display: grid;
`;

export default coreplus;
