import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

const foldingdoor = () => {
  return (
    <SlidingDoorTemplate
      title="Folding Door"
      imageOverlapDetailsTitle="Bring in the outdoors "
      imageOverlapDetailsChildren={[
        "Multiple configurations available that can accommodate up to 24 ft wide and 10 ft tall.",
        "Highest quality stainless steel hinge and roller hardware, complimented by a European handle hardware and locking system that comes in a variety of finishes.",
        "Engineered no other folding door -- with structural steel reinforced sashes.",
        "Creates a seamless transition to the outdoors."
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

export default foldingdoor;
