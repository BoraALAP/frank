import styled from "../styled-components";

import { ImageOverlap } from "../../../components/pageSpecific/products/ImageOverlap";
import WindowsTemplate from "../../../template/WindowsTemplate";

const enersense = () => {
  return (
    <WindowsTemplate
      title="Enersense"
      imageOverlapDetailsTitle="Classic design
      meets modern engineering
      "
      imageOverlapDetailsChildren={[
        "5 5/8” vinyl/wood or cellular PVC hybrid frame",
        "Built in 1 3/16” nosing",
        "Thicker exterior sash walls (.090” versus .068”)",
        "Internal steel reinforcement channel to ensure optimal performance and operation for larger windows.",
        "Mullion reinforcement pocket to facilitate structural reinforcement when combining large units",
        "Engineered for bigger openings",
        "Rated Most efficient by Energy Star",
        "Interior available in Cherry, Oak, Pine and Cellular PVC. Other wood species upon special request.",
        "STC rating of 36-39 (Sound transmission)",
        "Internal steel reinforcement channel to ensure optimal performance and operation for larger windows.",
        "Mullion reinforcement pocket to facilitate structural reinforcement when combining large units.",
        "Available with true triple pane, 1 3/8” glazing for optimal performance & sound",
        "Heavy duty hinge for larger triple pane units",
        "Santoprene bulb seals improve sash/bulb contact area for a consistent seal and improved performance",
      ]}
      imageOverlapImageSrc="/product/core.png"
      imageOverlapImageTitle="Missing"
      imageOverlapImageChildren={["Missing"]}
      threeImagesProductImage1="/product/productImage1.jpg"
      threeImagesProductImage2="/product/productImage2.jpg"
      threeImagesProductImage3="/product/productImage3.jpg"
      threeImagesTitle="Missing"
      threeImagesDescription={["Missing"]}
      operations={[
        "Awning",
        "Casement",
        "Fixed Casement",
        "Round",
        "Rectangle",
        "Triangle",
        "Octagon",
      ]}
    />
  );
};

const Container = styled.div`
  display: grid;
`;

export default enersense;
