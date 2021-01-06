import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

const orchestradoor = () => {
  return (
    <SlidingDoorTemplate
      title="Orchestra Door"
      imageOverlapDetailsTitle="A modern look for everyone."
      imageOverlapDetailsChildren={[
        "Solid frame and sash construction with 7 ¼” frame depth and a 2 ¼” thick sashes.",
        "High performance roller system for smooth operation and designed for larger openings.",      
        "Superior energy efficiency and high performance ratings."
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

export default orchestradoor;
