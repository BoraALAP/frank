import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";

const foldingdoor = () => {
  return (
    <SlidingDoorTemplate
      title="Folding Door"
      imageOverlapDetailsTitle="Bring in the outdoors "
      imageOverlapDetailsChildren={[
        "Multiple configurations available that can accommodate up to 24 ft wide and 10 ft tall.",
        "Highest quality stainless steel hinge and roller hardware, complimented by a European handle hardware and locking system that comes in a variety of finishes.",
        "Engineered no other folding door -- with structural steel reinforced sashes.",
        "Creates a seamless transition to the outdoors.",
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

export default foldingdoor;
