import { gql, useQuery } from "@apollo/client";

import { Breadcrumbs } from "../components/layout/PageTitle";
import { Loading } from "../UI/Loading";
import { ImageOverlap } from "../components/pageSpecific/products/ImageOverlap";
import { FourImages } from "../components/pageSpecific/products/FourImages";

import { DesignEfficiency } from "../components/pageSpecific/EnergyEfficiency";
import { Container } from "../components/layout/Container";
import GreenInitiative from "../components/pageSpecific/products/GreenInitiative";

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
  } = data?.allProducts[0];

  const links = [
    {
      name: "Design Options",
      href: `/designoptions/product/${name}`,
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
        imageSrc4={productImage4}
        title={secondaryDetailsTitle}
        description={secondaryDetailsDescription}
      />
      <DesignEfficiency />
      <GreenInitiative product={name} />
    </Container>
  );
};

export default ProductTemplate;

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
    }
  }
`;
