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

  const links = [
    {
      name: "Exterior Finish",
      to: "Exterior Finish",
      show: data?.allProducts[0].exteriorOptions.length > 0,
    },
    {
      name: "Interior Finish",
      to: "Interior Finish",
      show: data?.allProducts[0].interiorOptions.length > 0,
    },
    {
      name: "Hardware",
      to: "Hardware",
      show: data?.allProducts[0].hardwareKitOptions.length > 0,
    },
    {
      name: "Glass",
      to: "Glass",
      show: data?.allProducts[0].glassOptions.length > 0,
    },
    {
      name: "Screens",
      to: "Screens",
      show: data?.allProducts[0].screenOptions.length > 0,
    },
    {
      name: "Divided Lites",
      to: "Divided Lites",
      show: data?.allProducts[0].dividedLiteOptions.length > 0,
    },
    {
      name: "Brickmold",
      to: "Brickmold",
      show: data?.allProducts[0].brickmoldAndSubsillOptions.length > 0,
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
        subtitle="Product Design Options Overview"
        parent={`${Capitilize(productName)}`}
        links={list()}
      >
        <p>
          Deciding on the product that’s right for your project is just the
          beginning. With an extensive array of design options to choose from,
          you can customize your windows and doors to reflect your home’s
          architecture, character, and personality.
        </p>
      </Breadcrumbs>

      {data?.allProducts[0]?.exteriorOptions?.length > 0 && (
        <Operations
          title="Exterior Finish"
          id="Exterior Finish"
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
      {data?.allProducts[0]?.interiorOptions?.length > 0 && (
        <Operations
          title="Interior Finish"
          id="Interior Finish"
          subTitle="Product Design Options"
          list={data?.allProducts[0].interiorOptions}
          description="
          Choose classic white frames, or stand out with a colour coated interior. We can create a clean, smooth finish, or select from our wood grain options to make a statement.
          "
        />
      )}
      {data?.allProducts[0]?.hardwareKitOptions?.length > 0 && (
        <Operations
          title="Hardware"
          id="Hardware"
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
      {data?.allProducts[0]?.glassOptions?.length > 0 && (
        <Operations
          title="Glass"
          id="Glass"
          subTitle="Product Design Options"
          list={data?.allProducts[0].glassOptions}
          description="
          New glass refreshes your home’s look and improves your insulation. Choose from our different options for enhanced security, privacy, lighting, and energy efficiency. 
          "
        />
      )}
      {data?.allProducts[0]?.screenOptions?.length > 0 && (
        <Operations
          title="Screens"
          id="Screens"
          subTitle="Product Design Options"
          list={data?.allProducts[0].screenOptions}
          description="
          Screens come in a variety of mesh and screenbar options to complete the customization of your windows. Our newest product is FlexScreen for windows. And for entranceways, we offer factory-installed retractable screens.
         "
        />
      )}
      {data?.allProducts[0]?.dividedLiteOptions?.length > 0 && (
        <Operations
          title="Divided Lites"
          id="Divided Lites"
          subTitle="Product Design Options"
          list={data?.allProducts[0].dividedLiteOptions}
          description="
          Add refinement to any glass surface with divided lights. Presented in a variety of patterns and in a range of materials and finishes, the details make the difference. 
          "
        />
      )}
      {data?.allProducts[0]?.brickmoldAndSubsillOptions?.length > 0 && (
        <Operations
          title="Brickmold"
          id="Brickmold"
          subTitle="Product Design Options"
          list={data?.allProducts[0].brickmoldAndSubsillOptions}
          description="
          Exterior brickmold is available in an assortment of styles suitable for every application and aesthetic. Similarly, factory stained or painted trim is made to order and finished to match your interior for a cohesive look.
          "
        />
      )}
    </Container>
  );
}

const PRODUCTOPTIONS = gql`
  query productOptions($product: String) {
    allProducts(where: { name_i: $product }) {
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
      brickmoldAndSubsillOptions {
        id
        name
        description
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
