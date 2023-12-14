import * as Styled from "../../carousal.styled";
import React from "react";
import { CarousalContext } from "../../context";

export const Slide = ({ children, ...props }: React.PropsWithChildren) => {
  const { direction } = React.useContext<any>(CarousalContext);

  const slideProps = {
    ...props,
    direction,
  };

  return (
    <Styled.Slide {...slideProps}>{children}</Styled.Slide>
  )
}