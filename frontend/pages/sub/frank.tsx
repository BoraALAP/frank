import styled from "styled-components";
import Image from "next/image";
import { Container } from "../../components/layout/Container";
import { FullImage } from "../../UI/FullImage";
import { ContactDetails } from "../../components/pageSpecific/contact/ContactDetails";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Body } from "../../components/layout/Body";

const frank = () => {
  const { data: pageData, loading, error } = useQuery(PAGE_QUERY);

  const data = pageData?.allMeetFrankPages[0];

  console.log(data);

  return (
    <Container space padding gap title="Who is Frank?">
      <FullImage imageSrc="/frank.jpg" />
      <Content>
        <Text>
          <Subtitle>{data?.title}</Subtitle>

          <Body>{data?.paragraphs1.split("\n\n")}</Body>

          <TwoImage>
            {data?.image1.publicUrl && (
              <ImageContainer>
                <Image
                  src={data?.image1.publicUrl}
                  objectFit="cover"
                  layout="responsive"
                  width="50vw"
                  height="auto"
                />
              </ImageContainer>
            )}
            {data?.image2.publicUrl && (
              <ImageContainer>
                <Image
                  src={data?.image2.publicUrl}
                  objectFit="cover"
                  layout="responsive"
                  width="50vw"
                  height="auto"
                />
              </ImageContainer>
            )}
          </TwoImage>

          {data?.paragraphs2 && <Body>{data?.paragraphs2.split("\n\n")}</Body>}
        </Text>
        {/* <ContactDetails /> */}
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: grid;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    grid-template-columns: auto 25%;
  }
`;

const TwoImage = styled.div`
  display: grid;
  gap: var(--gap);
  grid-template-columns: 1fr 1fr;
`;

const ImageContainer = styled.div`
  display: grid;

  position: relative;
`;

const Subtitle = styled.h1`
  display: grid;
`;

const Text = styled.div`
  display: grid;
  gap: var(--gap);
  align-content: start;
`;

const PAGE_QUERY = gql`
  query PAGE_QUERY {
    allMeetFrankPages {
      title
      paragraphs1
      paragraphs2
      image1 {
        id
        publicUrl
        originalFilename
      }
      image2 {
        id
        publicUrl
        originalFilename
      }
    }
  }
`;

export default frank;
