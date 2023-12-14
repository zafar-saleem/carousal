import styled from "styled-components";

export const Carousal = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  // background-color: #000;
`;

export const Panel = styled.div<{
  direction?: string;
  vpsize?: string;
  position?: string;
}>`
  position: absolute;
  min-width: ${props => (props.direction === "vertical") ? `100vw` : `${props?.vpsize}px`};
  min-height: ${props => (props.direction === "vertical") ? `${props?.vpsize}px` : `100vh`};
  transition: all 0.5s ease-in-out;
  ${props => props.direction === "vertical" ? { top: `-${props.position}px` } : { left: `-${props.position}px` }}

  // background-color: red;
`;

export const Slide = styled.div<{ direction: string; }>`
  display: ${props => props?.direction === "vertical" ? `block` : `inline-block`};
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  // background-color: green;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  // height: 100vh;

  h1, h2 {
    margin: 0;
  }

  p {
    text-align: center;
    max-width: 600px;
  }

  &.overview {
    height: 100vh;
  }
`;

export const Project = styled.div<{ path: any; }>`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url(${props.path.src})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;
