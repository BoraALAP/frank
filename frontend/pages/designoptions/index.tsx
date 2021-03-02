import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

import { Container } from "../../components/layout/Container";
import { Operations } from "../../components/pageSpecific/products/Operations";
import { PageTitle } from "../../components/layout/PageTitle";

export default function designoptions() {
  const router = useRouter();

  const { data, loading } = useQuery(OPTIONS);

  const [display, setDisplay] = useState("");

  const links = [
    {
      name: "Exterior Finish",
      show: data?.allExteriors.length > 0,
    },
    {
      name: "Interior Finish",
      show: data?.allInteriors.length > 0,
    },
    {
      name: "Hardware",
      show: data?.allHardwareKits.length > 0,
    },
    {
      name: "Glass",
      show: data?.allGlasses.length > 0,
    },
    {
      name: "Screens",
      show: data?.allScreens.length > 0,
    },
    {
      name: "Divided Lites",
      show: data?.allDividedLites.length > 0,
    },
    {
      name: "Brickmould and Subsill",
      show: data?.allBrickmoldAndSubsills.length > 0,
    },
  ];

  const handleList = (name) => {
    setDisplay(name);
  };

  const list = () => {
    console.log(links);

    const item = links.filter((it) => it.show);
    return item;
  };

  return (
    <Container space pageGap padding title="Design Options">
      <Container>
        <PageTitle
          title="Design Options"
          subtitle="Overview (all window and door design options)"
          links={list()}
          clickAction={handleList}
        >
          <p>
            Deciding on the product that’s right for your project is just the
            beginning. With an extensive array of design options to choose from,
            you can customize your windows and doors to reflect your home’s
            architecture, character, and personality.
          </p>
        </PageTitle>
      </Container>
      {display === "Exterior Finish" && (
        <Operations
          title="Exterior Finish"
          subTitle="Product Design Options"
          list={data?.allExteriors}
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
          list={data?.allInteriors}
          description="
          Choose classic white frames, or stand out with a colour coated interior. We can create a clean, smooth finish, or select from our wood grain options to make a statement.
          "
        />
      )}
      {display === "Hardware" && (
        <Operations
          title="Hardware"
          subTitle="Product Design Options"
          list={data?.allHardwareKits}
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
          list={data?.allGlasses}
          description="
          New glass refreshes your home’s look and improves your insulation. Choose from our different options for enhanced security, privacy, lighting, and energy efficiency.
          "
        />
      )}
      {display === "Screens" && (
        <Operations
          title="Screens"
          subTitle="Product Design Options"
          list={data?.allScreens}
          description="
          Screens come in a variety of mesh and screenbar options to complete the customization of your windows. Our newest product is FlexScreen for windows. And for entranceways, we offer factory-installed retractable screens.
         "
        />
      )}
      {display === "Divided Lites" && (
        <Operations
          title="Divided Lites"
          subTitle="Product Design Options"
          list={data?.allDividedLites}
          description="
          Add refinement to any glass surface with divided lights. Presented in a variety of patterns and in a range of materials and finishes, the details make the difference.
          "
        />
      )}
      {display === "Brickmould and Subsill" && (
        <Operations
          title="Brickmould and Subsill"
          subTitle="Product Design Options"
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
    }
  }
`;
