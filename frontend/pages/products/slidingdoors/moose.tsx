import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

const moose = () => {
  return (
    <SlidingDoorTemplate
      title="Moose"
      imageOverlapDetailsTitle="Strong, sturdy, and dependable."
      imageOverlapDetailsChildren={[
        "Frame depth 5 ⅝” with interior and exterior jamb pocket cover for clean finish.",
        "Contemporary handle options, added security features, and twin point lock comes standard.",
        "3” proprietary heavy-duty screen."
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

export default moose;
