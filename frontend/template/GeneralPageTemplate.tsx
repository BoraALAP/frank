import { gql, useQuery } from "@apollo/client";
import { Breadcrumbs } from "../components/pageSpecific/products/PageTitle";

import { Operations } from "../components/pageSpecific/products/Operations";
import { ImageOverlap } from "../components/pageSpecific/products/ImageOverlap";
import { ThreeImages } from "../components/pageSpecific/products/ThreeImages";

import {
  DesignOptions,
  EnergyEfficiency,
} from "../components/pageSpecific/EnergyEfficiency";

interface Props {
  title: any;
  parent: any;
  links: any;
  imageOverlapDetailsTitle: any;
  imageOverlapDetailsChildren: any;
  imageOverlapImageSrc: any;
  imageOverlapImageTitle: any;
  imageOverlapImageChildren: any;
  threeImagesProductImage1: any;
  threeImagesProductImage2: any;
  threeImagesProductImage3: any;
  threeImagesTitle: any;
  threeImagesDescription: any;
  operationsTitle?: any;
  operationsSubTitle?: any;
}

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
  operationsTitle,
  operationsSubTitle,
}: Props) => {
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { ProductName: title },
  });

  console.log(data, error, title);

  const operationList = data?.allProducts[0].operations;

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
      <Operations
        title={operationsTitle}
        subTitle={operationsSubTitle}
        list={operationList}
        video
      >
        <p>
          Placeholder - Marco please advise. The choice of colour can have a big
          impact, or be a subtle accent to your home’s exterior. Select from our
          wide range of standard colour coating options, or request a custom
          colour match – the options are endless.
        </p>
      </Operations>
      <DesignOptions />
      <EnergyEfficiency />
    </>
  );
};

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($ProductName: String) {
    allProducts(where: { name_contains: $ProductName }) {
      id
      name
      operations {
        id
        name
        defaultImage
        video
      }
    }
  }
`;

export default GeneralTemplate;
