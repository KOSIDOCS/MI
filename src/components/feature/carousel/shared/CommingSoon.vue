<template>
  <StyledWrapper>
    <FrameWrapper>
      <Frame background="#000">
        <Middle>
          <StyledContentLeft>
            <StyledNumber>😊</StyledNumber>
            <StyledTitle>
              Coming Soon,
              <StyledTitleLongText>working on</StyledTitleLongText>
              <StyledTitleLongText>this page.</StyledTitleLongText>
            </StyledTitle>
          </StyledContentLeft>
        </Middle>
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import Frame from "./Frame";
import FrameWrapper from "./FrameWrapper";
import Middle from "./Middle";

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "DM Sans";
  position: relative;
`;

const StyledContentLeft = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 19px 20px 0;
`;

const StyledNumber = styled.div`
  font-size: 50px;
  margin-bottom: 14px;
  text-align: center;
`;

const StyledTitle = styled.div`
  font-size: 5.25rem;
  font-weight: 800;
  line-height: 92px;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;
  color: ${rgba("#fff", 0.96)};
`;

const StyledTitleLongText = styled.div`
  white-space: nowrap;
`;

export default {
  components: {
    StyledWrapper,
    StyledContentLeft,
    StyledNumber,
    StyledTitle,
    StyledTitleLongText,
    Frame,
    FrameWrapper,
    Middle,
  },
};
</script>
