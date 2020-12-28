import React from "react";
import styled from "styled-components";
import { Breadcrumbs } from "../components/pageSpecific/products/PageTitle";
import { Container } from "../components/layout/Container";
import { ImageOverlap } from "../components/pageSpecific/products/ImageOverlap";
import { ThreeImages } from "../components/pageSpecific/products/ThreeImages";

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
}) => {
  return (
    <>
      <Breadcrumbs links={links} title={title} parent={parent} />
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
    </>
  );
};

export default GeneralTemplate;
