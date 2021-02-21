import { useState } from "react";
import { Container } from "../../components/layout/Container";
import { Operations } from "../../components/pageSpecific/products/Operations";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Breadcrumbs } from "../../components/layout/PageTitle";
import { Capitilize } from "../../lib/Stringer";

export default function DesignOptionsProductTemplate({ productName }) {
  const router = useRouter();

  const { data, loading } = useQuery(PRODUCTOPTIONS, {
    variables: { product: Capitilize(productName) },
  });

  const [display, setDisplay] = useState("");

  const links = [
    {
      name: "Exterior Finish",
      show: data?.allProducts[0].exteriorOptions.length > 0,
    },
    {
      name: "Interior Finish",
      show: data?.allProducts[0].interiorOptions.length > 0,
    },
    {
      name: "Hardware",
      show: data?.allProducts[0].hardwareKitOptions.length > 0,
    },
    {
      name: "Glass",
      show: data?.allProducts[0].glassOptions.length > 0,
    },
    {
      name: "Screens",
      show: data?.allProducts[0].screenOptions.length > 0,
    },
    {
      name: "Divided Lites",
      show: data?.allProducts[0].dividedLiteOptions.length > 0,
    },
    {
      name: "Brickmould and Trim",
      show: data?.allProducts[0].brickmouldAndTrimOptions.length > 0,
    },
  ];

  const list = () => {
    const item = links.filter((it) => it.show);
    return item;
  };

  const handleList = (name) => {
    setDisplay(name);
  };

  return (
    <Container space pageGap padding title="Design Options">
      <Breadcrumbs
        title="Design Options"
        subtitle="Overview (all window and door design options)"
        parent={`${Capitilize(productName)}`}
        links={list()}
        clickAction={handleList}
      >
        <p>Product Design Options (Overview)</p>
        <p>
          Deciding on the product that’s right for your project is just the
          beginning. With an extensive array of design options to choose from,
          you can customize your windows and doors to reflect your home’s
          architecture, character, and personality.
        </p>
      </Breadcrumbs>

      {display === "Exterior Finish" && (
        <Operations
          title="Exterior Finish"
          subTitle="Product Design Options"
          list={data?.allProducts[0].exteriorOptions}
          description="
            The choice of colour can have a big impact, or be a subtle accent to
            your home’s exterior. Select from our wide range of standard colour
            coating options, or request a custom colour match – the options are
            endless.
          "
        />
      )}
      {display === "Interior Finish" && (
        <Operations
          title="Interior Finish"
          subTitle="Product Design Options"
          list={data?.allProducts[0].interiorOptions}
          description="
            White is the everyday standard of interior for products, though the
            choice is yours. Stand out and colour coat the interior, or clad it
            with either the clean look of Cellex, or select from our wood
            options to make a statement.
          "
        />
      )}
      {display === "Hardware" && (
        <Operations
          title="Hardware"
          subTitle="Product Design Options"
          list={data?.allProducts[0].hardwareKitOptions}
          description="
            Practical does not need to be boring. Quality and ease of use may be
            the most important aspects of your product’s hardware, but we offer
            different looks and finishes that complement your interior aesthetic
            and suit your taste.
          "
        />
      )}
      {display === "Glass" && (
        <Operations
          title="Glass"
          subTitle="Product Design Options"
          list={data?.allProducts[0].glassOptions}
          description="
            Glass is a critical aspect of the function and aesthetic of your
            product. What do you want to achieve – added security and privacy, a
            certain look, or reduce your home’s energy costs?
          "
        />
      )}
      {display === "Screens" && (
        <Operations
          title="Screens"
          subTitle="Product Design Options"
          list={data?.allProducts[0].screenOptions}
          description="
            Screens come in a variety of mesh and screenbar options to complete
            the customization of your products . New to our screen offerings is
            the FlexScreen for windows, and for entranceways, factory installed
            retractable screens.
          
         "
        />
      )}
      {display === "Divided Lites" && (
        <Operations
          title="Divided Lites"
          subTitle="Product Design Options"
          list={data?.allProducts[0].dividedLiteOptions}
          description="
            Add refinement to any glass surface with divided lites. Presented in
            a variety of patterns and in a range of materials and finishes, the
            details make the difference.
          "
        />
      )}
      {display === "Brickmould and Trim" && (
        <Operations
          title="Brickmould and Trim"
          subTitle="Product Design Options"
          list={data?.allProducts[0].brickmouldAndTrimOptions}
          description="
            Exterior brickmold is available in an assortment of styles suitable
            for every application and aesthetic. Similarly, factory stained or
            painted trim is made to order and finished to match your interior
            for added convenience.
          "
        />
      )}
    </Container>
  );
}

const PRODUCTOPTIONS = gql`
  query productOptions($product: String) {
    allProducts(where: { name_contains: $product }) {
      exteriorOptions {
        id
        name
        description
        image {
          id
          publicUrl
          originalFilename
        }
      }
      interiorOptions {
        id
        name
        description
        image {
          id
          publicUrl
          originalFilename
        }
      }
      hardwareKitOptions {
        id
        name
        description
        image {
          id
          publicUrl
          originalFilename
        }
      }
      glassOptions {
        id
        name
        description
        image {
          id
          publicUrl
          originalFilename
        }
      }
      screenOptions {
        id
        name
        description
        image {
          id
          publicUrl
          originalFilename
        }
      }
      dividedLiteOptions {
        id
        name
        description
        image {
          id
          publicUrl
          originalFilename
        }
      }
      brickmouldAndTrimOptions {
        id
        name
        description
        image {
          id
          publicUrl
          originalFilename
        }
      }
    }
  }
`;
