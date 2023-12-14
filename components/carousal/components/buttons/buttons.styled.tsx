import Link from "next/link";
import styled from "styled-components";
import { Props } from "./interfaces";

export const Buttons = styled(Link)<Props>`
  position: fixed;
  ${props => props.next ? ({ bottom: '0' }) : ({ top: '0' })};
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  z-index: 1;
  padding: 0 1rem;
  transition: all 0.5s;

  @media (hover: hover) {
    &:hover {
      background-color: rgba(0, 0, 0, .30);
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 1);
      backdrop-filter: blur(5px);

      svg {
        color: red;
        transition: all .6s;
        transform: rotate3d(0, 1, 0, 360deg);
      }
    }
  }
`;
