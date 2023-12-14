import * as Styled from "./buttons.styled";
import { IProps } from "./interfaces";

export const Buttons = ({ children, ...props }: IProps) => {
  const {
    parentAction,
  } = props;

  return (
    <Styled.Buttons {...props} onClick={parentAction}>{children}</Styled.Buttons>
  )
}
