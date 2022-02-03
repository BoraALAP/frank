import styled from "styled-components";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { Container } from "../../components/layout/Container";
import { Operations } from "../../components/pageSpecific/products/Operations";
import { PageTitle } from "../../components/layout/PageTitle";
import Image from "next/image";
import Details from "../../components/pageSpecific/products/Details";
import Tabs from "../../components/global/Tabs";
import { useState } from "react";

export default function designoptions() {
  const router = useRouter();

  const { data, loading } = useQuery(OPTIONS);

  const links = [
    {
      name: "Finishes",
      show: data?.allExteriors.length > 0,
      to: "Finishes",
    },
    {
      name: "Hardware",
      show: data?.allHardwareKits.length > 0,
      to: "Hardware",
    },
    {
      name: "Glass",
      show: data?.allGlasses.length > 0,
      to: "Glass",
    },
    {
      name: "Screens",
      show: data?.allScreens.length > 0,
      to: "Screens",
    },
    {
      name: "Window Divided Lites",
      show: data?.allDividedLites.length > 0,
      to: "Divided Lites",
    },
    {
      name: "Entry Door Slabs",
      show: data?.allDividedLites.length > 0,
      to: "Door Slabs",
    },
    {
      name: "Brickmold",
      show: data?.allBrickmoldAndSubsills.length > 0,
      to: "Brickmold",
    },
  ];

  const list = () => {
    const item = links.filter((it) => it.show);
    return item;
  };

  // Glass !!!!!!!!!!!!!!!

  const arrayGlassPrivacy = data?.allGlasses.filter((item) => {
    return item.privacy;
  });
  const arrayGlassNonPrivacy = data?.allGlasses.filter((item) => {
    return !item.privacy;
  });
  const [glassTab, setGlassTab] = useState(0);

  const arrayGlass = [arrayGlassNonPrivacy, arrayGlassPrivacy];
  const arrayGlassLabel = ["Decor", "Privacy"];

  // Exterior !!!!!!!!!!!!!!!

  const arrayExteriorLabel = data?.allProductCategories.map((item, index) => {
    return item.name;
  });

  const arrayExteriorColor = data?.allProductCategories.map((item, index) => {
    return item.exteriorOptions;
  });

  const [exteriorTab, setExteriorTab] = useState(0);

  // Divided Lites !!!!!!!!!!!!!!!

  const arrayDividedLabel = data?.allDividedLites
    .map((value) => {
      return value.type;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  const arrayDividedDesign = data?.allDividedLites.filter((item) => {
    return item.type === "Design";
  });
  const arrayDividedBar = data?.allDividedLites.filter((item) => {
    return item.type === "Bar Type";
  });
  const arrayDividedSDL = data?.allDividedLites.filter((item) => {
    return item.type === "SDL Bar Options";
  });

  const arrayDivided = [arrayDividedDesign, arrayDividedBar, arrayDividedSDL];

  const [dividedTab, setDividedTab] = useState(0);

  return (
    <Container space pageGap padding title="Design Options">
      <Container>
        <PageTitle
          title="Design Options"
          subtitle="Overview (all window and door design options)"
          links={list()}
        >
          <p>
            Deciding on the product that’s right for your project is just the
            beginning. With an extensive array of design options to choose from,
            you can customize your windows and doors to reflect your home’s
            architecture, character, and personality.
          </p>
        </PageTitle>
      </Container>

      {data?.allExteriorOptions.length > 0 && (
        <Operations
          title="Finishes"
          list={data?.allExteriorOptions}
          id="Finishes"
          description="
          The choice of colour can have a big impact, or be a subtle accent to
          your home’s exterior. Select from our wide range of standard colour
          coating options, or request a custom colour match – the options are
          endless.
          "
        />
      )}

      {data?.allHardwareKits.length > 0 && (
        <Operations
          title="Hardware"
          id="Hardware"
          contain
          list={data?.allHardwareKits}
          description="
            Practical does not need to be boring. Quality and ease of use may be
            the most important aspects of your product’s hardware, but we offer
            different looks and finishes that complement your interior aesthetic
            and suit your taste.
          "
        />
      )}

      {data?.allGlasses.length > 0 && (
        <Operations
          title="Glass"
          list={data?.allGlasses}
          id="Glass"
          description="
          New glass refreshes your home’s look and improves your insulation.
          Choose from our different options for enhanced security, privacy,
          lighting, and energy efficiency.
       "
        />
      )}

      {data?.allScreens.length > 0 && (
        <Operations
          title="Screens"
          id="Screens"
          list={data?.allScreens}
          description="
          Screens come in a variety of mesh and screenbar options to complete the customization of your windows. Our newest product is FlexScreen for windows. And for entranceways, we offer factory-installed retractable screens.
         "
        />
      )}

      {data?.allDividedLites.length > 0 && (
        <Operations
          title="Window Divided Lites"
          id="Divided Lites"
          list={data?.allDividedLites}
          description="
         Add refinement to any glass surface with divided lights. Presented
            in a variety of patterns and in a range of materials and finishes,
            the details make the difference.
        "
        />
      )}

      {data?.allDoorSlabs.length > 0 && (
        <Container gap>
          <Operations
            id="Door Slabs"
            list={data?.allDoorSlabs}
            title="Entry Door Slabs"
            contain
            description="
          Add refinement to any glass surface with divided lights. Presented
          in a variety of patterns and in a range of materials and finishes,
          the details make the difference."
          />
        </Container>
      )}

      {data?.allBrickmoldAndSubsills.length > 0 && (
        <Operations
          title="Brickmold"
          id="Brickmold"
          list={data?.allBrickmoldAndSubsills}
          description="
          Exterior brickmold is available in an assortment of styles suitable for every application and aesthetic. Similarly, factory stained or painted trim is made to order and finished to match your interior for a cohesive look.
          "
        />
      )}
    </Container>
  );
}

const OPTIONS = gql`
  query allOptions {
    allProductCategories {
      id
      name
      exteriorOptions {
        id
        name
        description
        stain
        image {
          publicUrl
          originalFilename
          id
        }
      }
    }
    allScreens(sortBy: name_ASC) {
      id
      name
      description
      image {
        publicUrl
        originalFilename
        id
      }
    }
    allGlasses(sortBy: name_ASC) {
      id
      name
      description
      type
      image {
        publicUrl
        originalFilename
        id
      }
    }
    allInteriors(sortBy: name_ASC) {
      id
      name
      description
      image {
        publicUrl
        originalFilename
        id
      }
    }
    allExteriors(sortBy: name_ASC) {
      id
      name
      description
      type
      image {
        publicUrl
        originalFilename
        id
      }
    }
    allHardwareKits(sortBy: name_ASC) {
      id
      name
      description
      type
      image {
        publicUrl
        originalFilename
        id
      }
    }
    allDividedLites(sortBy: name_ASC) {
      id
      name
      description
      type
      image {
        publicUrl
        originalFilename
        id
      }
    }
    allDoorSlabs {
      id
      name
      description
      material
      image {
        publicUrl
        originalFilename
        id
      }
    }
    allBrickmoldAndSubsills(sortBy: name_ASC) {
      id
      name
      description
      image {
        publicUrl
        originalFilename
        id
      }
      imageDisplay {
        publicUrl
        originalFilename
        id
      }
    }
  }
`;
