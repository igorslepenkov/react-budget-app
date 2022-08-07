import styled from "styled-components";
import { fonts } from "../../ui";

interface IProps {
  areaName?: string;
}

export const StyledSpentBadge = styled.section<IProps>`
  ${(props) => (props.areaName ? `grid-area: ${props.areaName};` : "")}
  display: flex;
  justify-content: flex-start;
  padding: 40px 10px;
  background-color: #e7bbe3;
  border-radius: 10px;
`;

export const SpentBadgeTitle = styled.h3`
  margin: 0;
  ${fonts.f2}
`;
