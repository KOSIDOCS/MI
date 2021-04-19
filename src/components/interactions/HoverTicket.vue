<template>
  <StyledTicketVisual id="ticket">
    <StyledCurvesLeft />
    <StyledCurvesRight />
    <StyledTicketVisualWrapper>
      <StyledVisualProfile>
        <StyledProfileWrap>
          <StyledProfileImg
            src="https://github.com/KOSIDOCS.png"
            alt="Kosidocs"
          />
          <StyledProfileText>
            <StyledProfileName>Kosidocs Dev</StyledProfileName>
            <StyledProfileUsername>
              <StyledGithub>
                <img src="@/assets/images/github.svg" alt="github" />
              </StyledGithub>
              KOSIDOCS
            </StyledProfileUsername>
          </StyledProfileText>
        </StyledProfileWrap>
        <StyledTicketEvent>
          <img src="@/assets/images/event-logos.png" alt="eventlogo" />
        </StyledTicketEvent>
      </StyledVisualProfile>
      <StyledNumberWrapper>
        <StyledTicketNumber>№ 014747</StyledTicketNumber>
      </StyledNumberWrapper>
    </StyledTicketVisualWrapper>
  </StyledTicketVisual>
</template>

<script>
import styled from "vue-styled-components";

const backgroundColor = "#000";
const color1 = "#d25778";
const color2 = "#ec585c";
const color3 = "#e7d155";
const color4 = "#56a8c6";

const StyledTicketVisual = styled.div`
  width: 650px;
  height: 320px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  background: linear-gradient(
    to right,
    ${color1},
    ${color2},
    ${color3},
    ${color4}
  );
  border-radius: 20px;
  padding: 5px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    left: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${color1};
    z-index: 2;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    right: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${color4};
    z-index: 2;
  }
`;

const StyledCurvesLeft = styled.div`
  position: absolute;
  top: 110px;
  left: -50px;
  width: 50px;
  height: 100px;
  background: ${backgroundColor};
  z-index: 4;
`;

const StyledCurvesRight = styled.div`
  position: absolute;
  top: 110px;
  right: -50px;
  width: 50px;
  height: 100px;
  background: ${backgroundColor};
  z-index: 4;
`;

const StyledProfileImg = styled.img`
  --size: 1;

  width: calc(82px * var(--size));
  height: calc(82px * var(--size));
  border-radius: 50%;
`;

const StyledProfileName = styled.p`
  --size: 1;

  font-size: calc(32px * var(--size));
  margin: 10px 0 5px 20px;
  font-weight: 700;
`;

const StyledProfileUsername = styled.p`
  margin: 0 0 5px 20px;
  color: #8a8f98;
  display: flex;
`;

const StyledGithub = styled.span`
  & img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;

const StyledTicketNumber = styled.div`
  --size: 1;

  transform: rotate(90deg) translateY(calc(100px * var(--size)));
  transform-origin: bottom right;
  font-size: calc(40px * var(--size));
  font-weight: 700;
  text-align: center;
  padding-bottom: 35px;
  width: calc(320px - 10px);
  border-bottom: 2px dashed #333;
`;

const StyledTicketVisualWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${backgroundColor};
  border-radius: 15px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    left: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${backgroundColor};
    z-index: 3;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    right: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${backgroundColor};
    z-index: 3;
  }
`;

const StyledVisualProfile = styled.div`
  --size: 1;

  padding: calc(39px * var(--size)) calc(155px * var(--size))
    calc(39px * var(--size)) calc(58px * var(--size));
`;

const StyledProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledProfileText = styled.div`
  margin: 0;
`;

const StyledTicketEvent = styled.div`
  margin-top: 25px;
  margin-left: -10px;
`;

const StyledNumberWrapper = styled.div`
  position: absolute;
  right: 35px;
  bottom: 0;
`;
export default {
  components: {
    StyledTicketVisual,
    StyledCurvesLeft,
    StyledCurvesRight,
    StyledGithub,
    StyledProfileImg,
    StyledProfileName,
    StyledProfileUsername,
    StyledTicketNumber,
    StyledTicketVisualWrapper,
    StyledVisualProfile,
    StyledProfileWrap,
    StyledProfileText,
    StyledTicketEvent,
    StyledNumberWrapper,
  },
  mounted: function () {
    window.addEventListener("mousemove", (e) => {
      // some code to run every time a user moves the mouse cursor
      const ticketElm = document.getElementById("ticket");
      const { x, y, width, height } = ticketElm.getBoundingClientRect();
      const centerPoint = { x: x + width / 2, y: y + height / 2 };

      const degreeX = (e.clientY - centerPoint.y) * 0.008;
      const degreeY = (e.clientX - centerPoint.x) * -0.008;

      ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
    });
  },
};
</script>
