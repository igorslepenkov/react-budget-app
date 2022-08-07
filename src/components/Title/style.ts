import styled from "styled-components";

interface IProps {
  areaName?: string;
}

export const StyledTitle = styled.h2<IProps>`
  ${(props) => (props.areaName ? `grid-area: ${props.areaName};` : "")}
  font-size: 24px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;
