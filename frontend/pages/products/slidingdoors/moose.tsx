import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";

const moose = () => {
  return (
    <SlidingDoorTemplate
      title="Moose"
      imageOverlapDetailsTitle="Strong, sturdy, and dependable."
      imageOverlapDetailsChildren={[
        "Frame depth 5 ⅝” with interior and exterior jamb pocket cover for clean finish.",
        "Contemporary handle options, added security features, and twin point lock comes standard.",
        "3” proprietary heavy-duty screen.",
      ]}
      imageOverlapImageSrc="/product/core.png"
      imageOverlapImageTitle="Missing"
      imageOverlapImageChildren={["Missing"]}
      threeImagesProductImage1="/product/productImage1.jpg"
      threeImagesProductImage2="/product/productImage2.jpg"
      threeImagesProductImage3="/product/productImage3.jpg"
      threeImagesTitle="Missing"
      threeImagesDescription={["Missing"]}
      operations={["Left Hand Door", "Right Hand Door", "Double Door"]}
    />
  );
};

export default moose;
