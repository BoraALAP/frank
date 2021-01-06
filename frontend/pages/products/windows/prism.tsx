
import styled from "styled-components";

import WindowsTemplate from "../../../template/WindowsTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

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
        "Ideal for renovation or new construction (new construction we recommend a brickmould be applied)"
      ]}
      imageOverlapImageSrc={image1}
      imageOverlapImageTitle="Missing"
      imageOverlapImageChildren={[
        "Missing"
      ]}
      threeImagesProductImage1={productImage1}
      threeImagesProductImage2={productImage2}
      threeImagesProductImage3={productImage3}
      threeImagesTitle="Missing"
      threeImagesDescription={[
        "Missing"
      ]}
      operations={["Awning", "Casement", "Fixed Casement", "Round", "Rectangle","Triangle","Octagon"]}
    />
  );
};

export default prism;
