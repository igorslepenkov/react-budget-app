import styled from "styled-components";
import { fonts } from "../../ui";

interface IProps {
  areaName?: string;
}

export const StyledTitle = styled.h2<IProps>`
  ${(props) => (props.areaName ? `grid-area: ${props.areaName};` : "")}
  ${fonts.f1}
`;
