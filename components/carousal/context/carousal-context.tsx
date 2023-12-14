import React from "react";
import { Props } from "./interfaces";
import { CarousalBody } from "../components/carousal-body";
import { Panel } from "../components/panel";
import { Slide } from "../components/slide";

export const CarousalContext = React.createContext({});

const Carousal = ({ children, ...props }: Props) => {
  const [vpSize, updateVPSize] = React.useState(0);
  const [slides, updateSlides] = React.useState(0);
  const [direction, updateDirection] = React.useState("");

  React.useEffect(() => {
    updateDirection(props.direction);
    updateSlides(props.slidesNumber);

    if (props.direction === "horizontal") {
      updateVPSize(window.innerHeight * props.slidesNumber);
    } else {
      updateVPSize(window.innerWidth * props.slidesNumber);
    }
  });

  const values = {
    vpSize,
    updateVPSize,
    direction,
    updateDirection,
    slides,
  };

  return (
    <CarousalContext.Provider value={values}>
      <div>{children}</div>
    </CarousalContext.Provider>
  );
};

Carousal.CarousalBody = CarousalBody;
Carousal.Panel = Panel;
Carousal.Slide = Slide;

// Carousal.CarousalBody = ({ children, ...props }: React.PropsWithChildren) => (<></>);
// Carousal.Panel = ({ children, ...props }: React.PropsWithChildren) => (<></>);
// Carousal.Slide = ({ children, ...props }: React.PropsWithChildren) => (<></>);

export default Carousal;
