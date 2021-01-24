import styled from "styled-components";
import { Container } from "../../components/layout/Container";
import { FullImage } from "../../UI/FullImage";

import { Body } from "../../components/layout/Body";
import { TwoColumn } from "../../UI/TwoColumn";

const frank = () => {
  return (
    <Container space>
      <Context>
        <Header>
          <FullImage imageSrc="/frank.jpg" />
          <Text>
            <Subtitle>Who is Frank?</Subtitle>
            <Body>
              <p>
                What differentiates Frank from our competitors is how we run the
                business, day in day out. Family owned and operated, we take
                pride in the fact that we have many long-standing members of the
                Frank team.
              </p>
            </Body>
          </Text>
        </Header>
        <TwoColumn imageSrc="/frank2.jpg" rev>
          <Subtitle>Commitment to Quality</Subtitle>
          <p>
            I am a window and door man. With a career that has spanned almost 50
            years in the industry, I began on the shop floor and worked my way
            up. I have learned from industry leaders and innovators, and had the
            good fortune of creating longstanding friendships with employees and
            customers. In all my years I have seen lots of change, highs and
            lows, and everything in between, and my experience has shaped my
            approach to the window business. Everyone is looking for something
            different at a great value. At FRANK, we have solutions and offer a
            level of customization unparalleled when compared to other
            manufacturers. What we do is simple -- We make windows and doors -
            for everyone.
          </p>
        </TwoColumn>

        <TwoColumn imageSrc="/frank3.jpg">
          <Subtitle>Placeholder copy</Subtitle>
          <p>
            I am a window and door man. With a career that has spanned almost 50
            years in the industry, I began on the shop floor and worked my way
            up. I have learned from industry leaders and innovators, and had the
            good fortune of creating longstanding friendships with employees and
            customers. In all my years I have seen lots of change, highs and
            lows, and everything in between, and my experience has shaped my
            approach to the window business. Everyone is looking for something
            different at a great value. At FRANK, we have solutions and offer a
            level of customization unparalleled when compared to other
            manufacturers. What we do is simple -- We make windows and doors -
            for everyone.
          </p>
        </TwoColumn>
      </Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  gap: calc(4 * ${({ theme }) => theme.gap});
`;

const Header = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};
`;

const Subtitle = styled.h4`
  display: grid;
`;

const Text = styled.div`
  display: grid;
  padding: 0 ${({ theme }) => theme.paddingSm};
  gap: ${({ theme }) => theme.gap};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    padding: 0 ${({ theme }) => theme.padding};
  }
`;

export default frank;
