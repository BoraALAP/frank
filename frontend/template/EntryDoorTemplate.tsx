import { Container } from "../components/layout/Container";
import GeneralTemplate from "./GeneralPageTemplate";

const EntryDoorTemplate = ({
  title,
  imageOverlapDetailsTitle,
  imageOverlapDetailsChildren,
  imageOverlapImageSrc,
  imageOverlapImageTitle,
  imageOverlapImageChildren,
  threeImagesProductImage1,
  threeImagesProductImage2,
  threeImagesProductImage3,
  threeImagesTitle,
  threeImagesDescription,
}) => {
  const links = [
    {
      name: "Design Options",
      href: "/sub/designoptions",
    },
    {
      name: "Energy Efficiency",
      href: "/sub/learn",
    },
    {
      name: "Find a Dealer",
      href: "/sub/dealerfinder",
    },
  ];

  return (
    <Container space gap title={`${title} - Entry Doors`}>
      <GeneralTemplate
        title={title}
        parent="Entry Doors"
        links={links}
        imageOverlapDetailsTitle={imageOverlapDetailsTitle}
        imageOverlapDetailsChildren={imageOverlapDetailsChildren}
        imageOverlapImageSrc={imageOverlapImageSrc}
        imageOverlapImageTitle={imageOverlapImageTitle}
        imageOverlapImageChildren={imageOverlapImageChildren}
        threeImagesProductImage1={threeImagesProductImage1}
        threeImagesProductImage2={threeImagesProductImage2}
        threeImagesProductImage3={threeImagesProductImage3}
        threeImagesTitle={threeImagesTitle}
        threeImagesDescription={threeImagesDescription}
      />
    </Container>
  );
};

export default EntryDoorTemplate;
