import EntryDoorTemplate from "../../../template/EntryDoorTemplate";

import image1 from "../../../assets/images/product/core.png";
import productImage1 from "../../../assets/images/product/productImage1.jpg";
import productImage2 from "../../../assets/images/product/productImage2.jpg";
import productImage3 from "../../../assets/images/product/productImage3.jpg";

const artisan = () => {
  return (
    <EntryDoorTemplate
      title="Artisan"
      imageOverlapDetailsTitle="Mixing Old World values with New World technology and design."
      imageOverlapDetailsChildren={[
        "Available in a range of styles and finishes that fool the eye -- Mahogany, Oak, Fir, Rustic, and Canvas.",
        "Superior quality construction and detailed craftsmanship that allows for 10% more glass than other entry door lines, and a clean hard edge that further mimics real wood.",
        "The handcrafted elegance of another era for today’s homeowner."
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

export default artisan;
