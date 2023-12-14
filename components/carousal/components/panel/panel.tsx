import * as Styled from "../../carousal.styled";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IPanelProps } from "../../interfaces";
import { Buttons } from "../buttons";
import { CarousalContext } from "../../context";
import React from "react";

export const Panel = ({ children, ...props }: React.PropsWithChildren & IPanelProps) => {
  // @ts-ignore
  const [panelPosition, updatePanelPosition] = React.useState({
    position: 0,
    slideNumber: 1,
  });
  // @ts-ignore
  const { direction, slides, vpSize } = React.useContext<any>(CarousalContext);

  const moveSlides = (scale: number) => {
    // @ts-ignore
    updatePanelPosition(prev => ({
      position: panelPosition.slideNumber >= slides ? 0 : prev.position + scale, // 910
      slideNumber: panelPosition.slideNumber >= slides ? 1 : panelPosition.slideNumber + 1,
    }));
  }
  // @ts-ignore
  const toggleSlides = React.useCallback(() => {
    if (direction === "vertical") {
      moveSlides(window.innerHeight);
      return;
    }
    moveSlides(window.innerWidth);
  }, [direction, slides, JSON.stringify(panelPosition)]);
  // @ts-ignore
  const togglePrevSlide = React.useCallback(() => {
    if (direction === "vertical") {
      // moveSlides(window.innerHeight);
      updatePanelPosition(prev => ({
        position: panelPosition.slideNumber <= slides ? 0 : prev.position + window.innerHeight, // 910
        slideNumber: panelPosition.slideNumber <= slides ? 2 : panelPosition.slideNumber + 1,
      }));
      return;
    }
    moveSlides(window.innerWidth);
  }, []);

  const panelProps = {
    ...props,
    vpsize: vpSize,
    slides,
    direction,
    ...panelPosition,
  }
  return (
    // @ts-ignore
    <Styled.Panel {...panelProps}>
      {props?.navbuttons && <Buttons href="" parentAction={togglePrevSlide}>
        <SlArrowUp style={{fontSize: `3rem`}} />
      </Buttons>}
      {children}
      {props?.navbuttons && <Buttons href="" next parentAction={toggleSlides}>
        <SlArrowDown style={{fontSize: `3rem`}} />
      </Buttons>}
    </Styled.Panel>
  )
}