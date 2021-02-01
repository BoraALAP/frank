import EntryDoorTemplate from "../../../template/EntryDoorTemplate";

const designer = () => {
  return (
    <EntryDoorTemplate
      title="Designer"
      imageOverlapDetailsTitle="Smooth fibreglass doors available in a range of options."
      imageOverlapDetailsChildren={[
        "For a simple replacement or add some style to your front facade.",
        "Expansive selection of glass configurations in flush glazed and modern door lite designs.",
        "Choose to add a punch of colour, and make this a showstopper entrance way.",
      ]}
      imageOverlapImageSrc="/product/core.png"
      imageOverlapImageTitle="Missing"
      imageOverlapImageChildren={["Missing"]}
      threeImagesProductImage1="/product/productImage1.jpg"
      threeImagesProductImage2="/product/productImage2.jpg"
      threeImagesProductImage3="/product/productImage3.jpg"
      threeImagesTitle="Missing"
      threeImagesDescription={["Missing"]}
      operations={[
        "Left Hand Inswing",
        "Right Hand Inswing",
        "Left Hand Outswing",
        "Right Hand Outswing",
        "Left Hand Inswing Right Hand Fixed",
        "Left Hand Fixed Right Hand Inswing",
        "Left Hand Outswing Right Hand Fixed",
        "Left Hand Fixed Right Hand Outswing",
      ]}
    />
  );
};

export default designer;
