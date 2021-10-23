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
      name: "Exterior Finish",
      show: data?.allExteriors.length > 0,
      to: "Exterior Finish",
    },
    // {
    //   name: "Interior Finish",
    //   show: data?.allInteriors.length > 0,
    //   to: "Interior Finish",
    // },
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
      name: "Divided Lites",
      show: data?.allDividedLites.length > 0,
      to: "Divided Lites",
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
  const arrayGlassTitles = ["Decor", "Privacy"];

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
      console.log(value, index, self);

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

      {/* <Details title="Exterior Finish" transparent id="Exterior Finish" />
      {data?.allProductCategories &&
        data.allProductCategories.map((item, index) => {
          console.log(item);

          return (
            <Operations
              key={index}
              subTitle={`${item.name} Exterior Options`}
              list={item.exteriorOptions}
              description="
            The choice of colour can have a big impact, or be a subtle accent to
            your home’s exterior. Select from our wide range of standard colour
            coating options, or request a custom colour match – the options are
            endless.
          "
            />
          );
        })} */}

      <Container gap>
        <Details title="Exterior" subtitle="Product Design Options" transparent>
          The choice of colour can have a big impact, or be a subtle accent to
          your home’s exterior. Select from our wide range of standard colour
          coating options, or request a custom colour match – the options are
          endless.
        </Details>

        {arrayExteriorLabel && (
          <Tabs
            tabs={arrayExteriorLabel}
            active={exteriorTab}
            onClick={(e) => setExteriorTab(e)}
          />
        )}
        {arrayExteriorColor &&
          arrayExteriorColor.map((list, index) => {
            const withStain = list.filter((item) => {
              return item.stain;
            });
            const withoutStain = list.filter((item) => {
              return !item.stain;
            });

            if (index === exteriorTab) {
              if (withStain.length > 0) {
                return (
                  <>
                    <Operations
                      id="Exterior"
                      subTitle="Stain"
                      key={`${index + 10}`}
                      list={withStain}
                    />
                    <Operations
                      id="Exterior"
                      subTitle="Color"
                      key={`${index}`}
                      list={withoutStain}
                    />
                  </>
                );
              }
              return (
                <Operations
                  id="Exterior"
                  key={`${index}`}
                  list={withoutStain}
                />
              );
            }
          })}
      </Container>

      {/* <Details title="Interior Finish" transparent id="Interior Finish" />
      {data?.allProductCategories &&
        data.allProductCategories.map((item) => {
          return (
            <Operations
              subTitle={`${item.name} Interior Finish`}
              list={item.exteriorOptions}
              description="
            The choice of colour can have a big impact, or be a subtle accent to
            your home’s exterior. Select from our wide range of standard colour
            coating options, or request a custom colour match – the options are
            endless.
          "
            />
          );
        })} */}

      {data?.allHardwareKits.length > 0 && (
        <Operations
          title="Hardware"
          id="Hardware"
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

      {data?.allGlasses.length > 0 && (
        <Container gap>
          <Details title="Glass" subtitle="Product Design Options" transparent>
            New glass refreshes your home’s look and improves your insulation.
            Choose from our different options for enhanced security, privacy,
            lighting, and energy efficiency.
          </Details>

          <Tabs
            tabs={arrayGlassTitles}
            active={glassTab}
            onClick={(e) => setGlassTab(e)}
          />
          {arrayGlass.map((list, index) => {
            if (index === glassTab)
              return <Operations id="Glass" key={`${index}`} list={list} />;
          })}
        </Container>
      )}

      {data?.allScreens.length > 0 && (
        <Operations
          title="Screens"
          id="Screens"
          subTitle="Product Design Options"
          list={data?.allScreens}
          description="
          Screens come in a variety of mesh and screenbar options to complete the customization of your windows. Our newest product is FlexScreen for windows. And for entranceways, we offer factory-installed retractable screens.
         "
        />
      )}

      {data?.allDividedLites.length > 0 && (
        <Container gap>
          <Details
            title="Divided Lites"
            subtitle="Product Design Options"
            transparent
          >
            Add refinement to any glass surface with divided lights. Presented
            in a variety of patterns and in a range of materials and finishes,
            the details make the difference.
          </Details>

          <Tabs
            tabs={arrayDividedLabel}
            active={dividedTab}
            onClick={(e) => setDividedTab(e)}
          />
          {arrayDivided.map((list, index) => {
            if (index === dividedTab)
              return <Operations id="Divided" key={`${index}`} list={list} />;
          })}
        </Container>
      )}

      {/* <>
        {data?.allDividedLites.length > 0 && (
          <Operations
            title="Divided Lites"
            id="Divided Lites"
            subTitle="Product Design Options"
            list={data?.allDividedLites}
            description="
          Add refinement to any glass surface with divided lights. Presented in a variety of patterns and in a range of materials and finishes, the details make the difference.
          "
          />
        )}
        <Extra>
          <DividedLitesOptions>
            <Details subtitle="SDL Bar Options" transparent />
            <ImageCont>
              {SDLBarOptions.map((it, index) => {
                return (
                  <Card key={index}>
                    <Image
                      src={it.imgSrc}
                      layout="responsive"
                      width={400}
                      height={300}
                    />
                    <Title>{it.title}</Title>
                    <Description>{it.description}</Description>
                  </Card>
                );
              })}
            </ImageCont>
          </DividedLitesOptions>
          <DividedLitesOptions>
            <Details transparent subtitle="Bar Type" />
            <ImageCont>
              {BarType.map((it, index) => {
                return (
                  <Card key={index}>
                    <Image
                      src={it.imgSrc}
                      layout="responsive"
                      width={400}
                      height={300}
                    />
                    <Title>{it.title}</Title>
                    <Description>{it.description}</Description>
                  </Card>
                );
              })}
            </ImageCont>
          </DividedLitesOptions>
        </Extra>
      </> */}

      {data?.allBrickmoldAndSubsills.length > 0 && (
        <Operations
          title="Brickmold"
          id="Brickmold"
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

const Extra = styled.div`
  display: grid;
  gap: calc(2 * var(--gap));
`;

const DividedLitesOptions = styled.div`
  display: grid;
  gap: var(--gap);
`;

const ImageCont = styled.div`
  display: grid;
  gap: var(--gap);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Card = styled.div`
  display: grid;
  gap: calc(var(--gap) / 2);
  align-content: baseline;
`;

const Title = styled.h6`
  display: grid;
`;

const Description = styled.p`
  display: grid;
`;

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
      privacy
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
      stain
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
      type
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
