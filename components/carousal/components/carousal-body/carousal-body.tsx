import * as Styled from "../../carousal.styled";

export const CarousalBody = ({ children }: React.PropsWithChildren) => {
  return (
    <Styled.Carousal>{children}</Styled.Carousal>
  )
}