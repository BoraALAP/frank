import EntryDoorTemplate from "../../../template/EntryDoorTemplate";

const classic = () => {
  return (
    <EntryDoorTemplate
      title="Classic"
      imageOverlapDetailsTitle="Mahogany and Oak grain in all the traditional styles."
      imageOverlapDetailsChildren={[
        "The industry leading fibreglass door with ultra realistic wood grain technology.",
        "Expansive selection of glass configurations in flush glazed and modern door lite designs.",
        "The look and feel of a real wood door with all the upside.",
      ]}
      imageOverlapImageSrc="/product/core.png"
      imageOverlapImageTitle="Missing"
      imageOverlapImageChildren={["Missing"]}
      threeImagesProductImage1="/product/productImage1.jpg"
      threeImagesProductImage2="/product/productImage2.jpg"
      threeImagesProductImage3="/product/productImage3.jpg"
      threeImagesTitle="Missing"
      threeImagesDescription={["Missing"]}
    />
  );
};

export default classic;
