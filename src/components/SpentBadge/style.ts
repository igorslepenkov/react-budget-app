import styled from "styled-components";

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
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
