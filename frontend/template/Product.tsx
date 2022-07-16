import React from "react";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

import { Breadcrumbs, PageTitle } from "../components/layout/PageTitle";
import { Loading } from "../UI/Loading";
import { ImageOverlap } from "../components/pageSpecific/products/ImageOverlap";
import { FourImages } from "../components/pageSpecific/products/FourImages";

import { DesignEfficiency } from "../components/pageSpecific/EnergyEfficiency";
import { Container } from "../components/layout/Container";
import { GreenInitiative } from "../components/pageSpecific/products/GreenInitiative";
import { Operations } from "../components/pageSpecific/products/Operations";

const ProductTemplate = ({ product }) => {
  const { loading, data } = useQuery(PRODUCT_QUERY, {
    variables: { product: product },
  });

  if (loading) {
    return <Loading />;
  }

  const {
    id,
    name,
    hide,
    pageSubtitle,
    productImage,
    productCategories,
    imageTitle,
    imageDescription,
    specs,
    secondaryDetailsTitle,
    secondaryDetailsDescription,
    productImage1,
    productImage2,
    productImage3,
    productImage4,
    operations,
    operationsTitle,
    operationsSubTitle,
    operationsDescription,
    configurations,
    configurationsTitle,
    configurationsSubTitle,
    configurationsDescription,
  } = data?.allProducts[0];

  const links = [
    {
      name: "Design Options",
      href: `/designoptions/product/${name}`,
      show: true,
    },
    {
      name: "Operations",
      to: "operations",
      show: true,
    },
    {
      name: "Configurations",
      to: "configurations",
      show: configurations.length > 0,
    },
    {
      name: "Home Energy Calculator",
      to: "energyCalculator",
      show: productCategories[0].name === "Windows",
    },
    {
      name: "Energy Efficiency",
      href: "/sub/learn",
      show: true,
    },
    {
      name: "Find a Dealer",
      href: "/sub/dealerfinder",
      show: true,
    },
  ];

  return (
    <Container space pageGap>
      <Breadcrumbs
        links={links}
        title={name}
        parent={productCategories[0].name}
        padding
      />
      <ImageOverlap
        title={name}
        subtitle={pageSubtitle}
        image={productImage}
        rotate={id}
        imageTitle={imageTitle}
        imageDescription={imageDescription}
        spec={specs}
      />
      <FourImages
        imageSrc1={productImage1}
        imageSrc2={productImage2}
        imageSrc3={productImage3}
        title={secondaryDetailsTitle}
        description={secondaryDetailsDescription}
      />
      {/* <PageTitle title="Operations" padding id="operations" /> */}
      {operations.length > 0 && (
        <Operations
          list={operations}
          title={operationsTitle || "Operations"}
          subTitle={operationsSubTitle}
          description={operationsDescription}
          video
          padding
          id="operations"
        />
      )}
      {configurations.length > 0 && (
        <Operations
          list={configurations}
          title={configurationsTitle || "Configurations"}
          subTitle={configurationsSubTitle}
          description={configurationsDescription}
          video
          padding
          contain
          id="configurations"
        />
      )}
      <ImageContainer>
        <Image src={productImage4.publicUrl} objectFit="cover" layout="fill" />
      </ImageContainer>
      <DesignEfficiency />

      <GreenInitiative product={name} id="energyCalculator" />
    </Container>
  );
};

export default ProductTemplate;

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  min-height: 600px;
`;

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($product: String) {
    allProducts(where: { name_i: $product }) {
      id
      name
      pageSubtitle
      productImage {
        id
        originalFilename
        publicUrl
      }
      productCategories {
        id
        name
        description
      }
      imageTitle
      imageDescription
      specs
      productImage1 {
        id
        originalFilename
        publicUrl
      }
      secondaryDetailsTitle
      secondaryDetailsDescription
      productImage2 {
        id
        originalFilename
        publicUrl
      }
      productImage3 {
        id
        originalFilename
        publicUrl
      }
      productImage4 {
        id
        originalFilename
        publicUrl
      }
      operations {
        id
        name
        image {
          id
          publicUrl
          originalFilename
        }
        video
        products {
          id
          name
        }
      }
      operationsTitle
      operationsSubTitle
      operationsDescription
      configurations {
        id
        name
        image {
          id
          publicUrl
          originalFilename
        }
        video
        products {
          id
          name
        }
      }
      configurationsTitle
      configurationsSubTitle
      configurationsDescription
    }
  }
`;
