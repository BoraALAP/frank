import EntryDoorTemplate from "../../../template/EntryDoorTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

const designer = () => {
  return (
    <EntryDoorTemplate
      title="Designer"
      imageOverlapDetailsTitle="Smooth fibreglass doors available in a range of options."
      imageOverlapDetailsChildren={[
        "For a simple replacement or add some style to your front facade.",
        "Expansive selection of glass configurations in flush glazed and modern door lite designs.",
        "Choose to add a punch of colour, and make this a showstopper entrance way."
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

export default designer;
