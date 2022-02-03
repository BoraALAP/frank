import styled from "styled-components";

import { Container } from "../../components/layout/Container";
import { PageTitle } from "../../components/layout/PageTitle";
import { Body } from "../../components/layout/Body";
import { TwoColumn } from "../../UI/TwoColumn";
import YouTubePlayer from "react-player/youtube";

const media = () => {
  // const { loading, error, data } = useQuery(OPERATION_QUERY);

  return (
    <Container space title="Media" pageGap>
      <Context>
        <PageTitle title="Media" padding>
          <Body>
            <>
              There are many benefits to energy efficient windows and doors.
              Aside from having better control over your home’s interior climate
              and living more comfortably in the space, you are lessening
              utility costs, and ultimately reducing your carbon footprint.
            </>
            <>
              In simplest terms, the glass, the product’s construction, and the
              installation all play critical roles in limiting the amount of
              heat that enters and escapes your home.
            </>
            <>
              FRANK products are ENERGY STAR rated and provide ratings designed
              to indicate a window or door’s efficiency. There are several terms
              that will better educate you, and lead to a better understanding
              of a product’s effectiveness in insulating and blocking heat from
              the sun, among other things.
            </>
          </Body>
        </PageTitle>
      </Context>
      <Container padding>
        <Grid>
          <YouTubePlayer url="https://www.youtube.com/watch?v=7Q-_7Q-_7Q-" />
          <YouTubePlayer url="https://www.youtube.com/watch?v=7Q-_7Q-_7Q-" />
          <YouTubePlayer url="https://www.youtube.com/watch?v=7Q-_7Q-_7Q-" />
          <YouTubePlayer url="https://www.youtube.com/watch?v=7Q-_7Q-_7Q-" />
          <YouTubePlayer url="https://www.youtube.com/watch?v=7Q-_7Q-_7Q-" />
        </Grid>
      </Container>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  gap: calc(4 * var(--gap));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(2 * var(--gap));
`;

export default media;
