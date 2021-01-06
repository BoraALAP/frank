import EntryDoorTemplate from "../../../template/EntryDoorTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

const classic = () => {
  return (
    <EntryDoorTemplate
      title="Classic"
      imageOverlapDetailsTitle="Mahogany and Oak grain in all the traditional styles."
      imageOverlapDetailsChildren={[
        "The industry leading fibreglass door with ultra realistic wood grain technology.",
        "Expansive selection of glass configurations in flush glazed and modern door lite designs.",
        "The look and feel of a real wood door with all the upside."
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

export default classic;
