import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";

const orchestradoor = () => {
  return (
    <SlidingDoorTemplate
      title="Orchestra Door"
      imageOverlapDetailsTitle="A modern look for everyone."
      imageOverlapDetailsChildren={[
        "Solid frame and sash construction with 7 ¼” frame depth and a 2 ¼” thick sashes.",
        "High performance roller system for smooth operation and designed for larger openings.",
        "Superior energy efficiency and high performance ratings.",
      ]}
      imageOverlapImageSrc="/product/core.png"
      imageOverlapImageTitle="Missing"
      imageOverlapImageChildren={["Missing"]}
      threeImagesProductImage1="/product/productImage1.jpg"
      threeImagesProductImage2="/product/productImage2.jpg"
      threeImagesProductImage3="/product/productImage3.jpg"
      threeImagesTitle="Missing"
      threeImagesDescription={["Missing"]}
      operations={["Left Hand Door", "Right Hand Door"]}
    />
  );
};

export default orchestradoor;
