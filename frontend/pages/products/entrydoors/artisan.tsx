import EntryDoorTemplate from "../../../template/EntryDoorTemplate";

const artisan = () => {
  return (
    <EntryDoorTemplate
      title="Artisan"
      imageOverlapDetailsTitle="Mixing Old World values with New World technology and design."
      imageOverlapDetailsChildren={[
        "Available in a range of styles and finishes that fool the eye -- Mahogany, Oak, Fir, Rustic, and Canvas.",
        "Superior quality construction and detailed craftsmanship that allows for 10% more glass than other entry door lines, and a clean hard edge that further mimics real wood.",
        "The handcrafted elegance of another era for today’s homeowner.",
      ]}
      imageOverlapImageSrc="/product/core.png"
      imageOverlapImageTitle="Missing"
      imageOverlapImageChildren={["Missing"]}
      threeImagesProductImage1="/product/productImage1.jpg"
      threeImagesProductImage2="/product/productImage2.jpg"
      threeImagesProductImage3="/product/productImage3.jpg"
      threeImagesTitle="Missing"
      threeImagesDescription={["Missing"]}
      operations={["Missing"]}
    />
  );
};

export default artisan;
