import * as Styled from "./card.styled";

export const Card = ({ ...props }) => {
  return (
    <Styled.Card>
      <Styled.Header>{props.title}</Styled.Header>
      <Styled.Container>
        {props.contents}
      </Styled.Container>
      <Styled.Footer>Footer</Styled.Footer>
    </Styled.Card>
  )
}