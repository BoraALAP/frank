import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

const liftandslidedoor = () => {
  return (
    <SlidingDoorTemplate
      title="Lift and Slide Door"
      imageOverlapDetailsTitle="Trending today, for tomorrow’s architecture."
      imageOverlapDetailsChildren={[
        "The industry’s largest 2 panel offering for a patio door with unparalleled energy efficiency and performance ratings.",
        "Multi-point locking system and upgraded European hardware that can accommodate both dual and triple-glazed units comes standard.",
        "Ultra smooth and finger tip easy panel operation.",
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

export default liftandslidedoor;
