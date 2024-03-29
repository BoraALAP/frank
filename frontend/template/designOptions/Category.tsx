import { gql, useQuery } from "@apollo/client";

import { Container } from "../../components/layout/Container";
import { Operations } from "../../components/pageSpecific/products/Operations";
import { Breadcrumbs } from "../../components/layout/PageTitle";
import { Capitilize } from "../../lib/Stringer";

export const DesignOptionsCategoryTemplate = ({ categoryName }) => {
  const { data, loading } = useQuery(CATEGORYOPTIONS, {
    variables: { category: Capitilize(categoryName) },
  });

  const links = [
    {
      name: "Door Slabs",
      to: "Door Slabs",
      show: data?.allProductCategories[0].doorSlabOptions.length > 0,
    },
    {
      name: "Finishes",
      to: "Finishes",
      show: data?.allProductCategories[0].exteriorOptions.length > 0,
    },

    {
      name: "Hardware",
      to: "Hardware",
      show: data?.allProductCategories[0].hardwareKitOptions.length > 0,
    },
    {
      name: "Glass",
      to: "Glass",
      show: data?.allProductCategories[0].glassOptions.length > 0,
    },
    {
      name: "Screens",
      to: "Screens",
      show: data?.allProductCategories[0].screenOptions.length > 0,
    },
    {
      name: "Divided Lites",
      to: "Divided Lites",
      show: data?.allProductCategories[0].dividedLiteOptions.length > 0,
    },

    {
      name: "Brickmold",
      to: "Brickmold",
      show: data?.allProductCategories[0].brickmoldAndSubsillOptions.length > 0,
    },
  ];

  const list = () => {
    const item = links.filter((it) => it.show);
    return item;
  };

  return (
    <Container space pageGap padding title="Design Options">
      <Breadcrumbs
        title="Design Options"
        // subtitle="Category Design Options Overview"
        parent={`${Capitilize(categoryName)}`}
        links={list()}
      >
        <p>
          Deciding on the product that’s right for your project is just the
          beginning. With an extensive array of design options to choose from,
          you can customize your windows and doors to reflect your home’s
          architecture, character, and personality.
        </p>
      </Breadcrumbs>

      {data?.allProductCategories[0].doorSlabOptions.length > 0 && (
        <Container gap>
          <Operations
            id="Door Slabs"
            list={data?.allProductCategories[0].doorSlabOptions}
            title="Entry Door Slabs"
            contain
            description="
          Add refinement to any glass surface with divided lights. Presented
          in a variety of patterns and in a range of materials and finishes,
          the details make the difference."
          />
        </Container>
      )}

      {data?.allProductCategories[0].exteriorOptions.length > 0 && (
        <Operations
          title="Finishes"
          list={data?.allProductCategories[0].exteriorOptions}
          id="Finishes"
          description="
          The choice of colour can have a big impact, or be a subtle accent to
          your home’s exterior. Select from our wide range of standard colour
          coating options, or request a custom colour match – the options are
          endless.
          "
        />
      )}

      {data?.allProductCategories[0].hardwareKitOptions.length > 0 && (
        <Operations
          title="Hardware"
          id="Hardware"
          contain
          list={data?.allProductCategories[0].hardwareKitOptions}
          description="
            Practical does not need to be boring. Quality and ease of use may be
            the most important aspects of your product’s hardware, but we offer
            different looks and finishes that complement your interior aesthetic
            and suit your taste.
          "
        />
      )}

      {data?.allProductCategories[0].glassOptions.length > 0 && (
        <Operations
          title="Glass"
          list={data?.allProductCategories[0].glassOptions}
          id="Glass"
          description="
          New glass refreshes your home’s look and improves your insulation.
          Choose from our different options for enhanced security, privacy,
          lighting, and energy efficiency.
       "
        />
      )}

      {data?.allProductCategories[0].screenOptions.length > 0 && (
        <Operations
          title="Screens"
          id="Screens"
          list={data?.allProductCategories[0].screenOptions}
          description="
          Screens come in a variety of mesh and screenbar options to complete the customization of your windows. Our newest product is FlexScreen for windows. And for entranceways, we offer factory-installed retractable screens.
         "
        />
      )}

      {data?.allProductCategories[0].dividedLiteOptions.length > 0 && (
        <Operations
          title="Divided Lites"
          id="Divided Lites"
          contain
          list={data?.allProductCategories[0].dividedLiteOptions}
          description="
         Add refinement to any glass surface with divided lights. Presented
            in a variety of patterns and in a range of materials and finishes,
            the details make the difference.
        "
        />
      )}

      {data?.allProductCategories[0].brickmoldAndSubsillOptions.length > 0 && (
        <Operations
          title="Brickmold"
          id="Brickmold"
          contain
          list={data?.allProductCategories[0].brickmoldAndSubsillOptions}
          description="
          Exterior brickmold is available in an assortment of styles suitable for every application and aesthetic. Similarly, factory stained or painted trim is made to order and finished to match your interior for a cohesive look.
          "
        />
      )}
    </Container>
  );
};

const CATEGORYOPTIONS = gql`
  query categoryOptions($category: String) {
    allProductCategories(where: { name_contains: $category }) {
      exteriorOptions {
        id
        name
        description
        type
        image {
          id
          publicUrl
          originalFilename
        }
        imageDisplay {
          publicUrl
          originalFilename
          id
        }
      }

      hardwareKitOptions(sortBy: name_DESC) {
        id
        name
        description
        type(sortBy: name_DESC) {
          id
          name
        }
        image {
          id
          publicUrl
          originalFilename
        }
        imageDisplay {
          publicUrl
          originalFilename
          id
        }
      }
      glassOptions {
        id
        name
        description
        type
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
        type
        url
        image {
          id
          publicUrl
          originalFilename
        }
        imageDisplay {
          publicUrl
          originalFilename
          id
        }
      }
      dividedLiteOptions {
        id
        name
        description
        type
        image {
          id
          publicUrl
          originalFilename
        }
      }
      doorSlabOptions {
        id
        name
        description
        image {
          id
          publicUrl
          originalFilename
        }
      }
      brickmoldAndSubsillOptions {
        id
        name
        description
        type
        image {
          id
          publicUrl
          originalFilename
        }
        imageDisplay {
          publicUrl
          originalFilename
          id
        }
      }
    }
  }
`;
