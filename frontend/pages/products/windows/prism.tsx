import styled from "styled-components";

import WindowsTemplate from "../../../template/WindowsTemplate";

const prism = () => {
  return (
    <WindowsTemplate
      title="Prism"
      imageOverlapDetailsTitle="Maximize Your Living Space"
      imageOverlapDetailsChildren={[
        "4 9/16” vinyl frame",
        "Thicker exterior sash walls (.090” versus .068”)",
        "25% more glass surface area*",
        "Internal steel reinforcement channel to ensure optimal performance and operation for larger windows.",
        "Mullion reinforcement pocket to facilitate structural reinforcement when combining large units",
        "Engineered for bigger openings",
        "Available with true triple pane, 1 3/8” glazing for optimal performance & sound",
        "Heavy duty hinge for larger triple pane units",
        "Santoprene bulb seals improve sash/bulb contact area for a consistent seal and improved performance",
        "Ideal for renovation or new construction (new construction we recommend a brickmould be applied)",
      ]}
      imageOverlapImageSrc="/product/prism.jpg"
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

export default prism;
