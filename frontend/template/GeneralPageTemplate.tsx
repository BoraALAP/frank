import { gql, useQuery } from "@apollo/client";
import { Breadcrumbs } from "../components/pageSpecific/products/PageTitle";

import { Operations } from "../components/pageSpecific/products/Operations";
import { ImageOverlap } from "../components/pageSpecific/products/ImageOverlap";
import { ThreeImages } from "../components/pageSpecific/products/ThreeImages";
import { DesignOptions } from "../components/pageSpecific/DesignOptions";
import { EnergyEfficiency } from "../components/pageSpecific/EnergyEfficiency";

const GeneralTemplate = ({
  title,
  parent,
  links,
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
  operations,
}) => {
  const { loading, error, data } = useQuery(OPERATIONS);
  console.log(data);

  const operationList = data?.allOperations.filter((item) => {
    return operations.find((operation) => item.name === operation);
  });

  return (
    <>
      <Breadcrumbs links={links} title={title} parent={parent} padding />
      <ImageOverlap
        detailsTitle={imageOverlapDetailsTitle}
        detailsChildren={imageOverlapDetailsChildren}
        imageSrc={imageOverlapImageSrc}
        imageTitle={imageOverlapImageTitle}
        imageChildren={imageOverlapImageChildren}
      />
      <ThreeImages
        imageSrc1={threeImagesProductImage1}
        imageSrc2={threeImagesProductImage2}
        imageSrc3={threeImagesProductImage3}
        title={threeImagesTitle}
        description={threeImagesDescription}
      />
      <Operations list={operationList} />
      <DesignOptions />
      <EnergyEfficiency />
    </>
  );
};

const OPERATIONS = gql`
  query Operation {
    allOperations {
      id
      name
      defaultImage
      video
    }
  }
`;

export default GeneralTemplate;
