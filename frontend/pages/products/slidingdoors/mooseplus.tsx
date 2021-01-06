import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

const mooseplus = () => {
  return (
    <SlidingDoorTemplate
      title="Moose+"
      imageOverlapDetailsTitle="Elevated function and feel"
      imageOverlapDetailsChildren={[
        "Deeper 5 ⅞” frame depth with interior and exterior jamb pocket cover for clean finish.",
        "The sill looks and performs better than anything on the market, with a specially designed aluminum sill plate cover, and a sub-sill drainage system.",
        "All doors 8’ and wider come standard with steel header reinforcement that allows for smoother operation, and have an engineered anti lift block for added security.",
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
      operations={["Missing"]}
    />
  );
};

export default mooseplus;
