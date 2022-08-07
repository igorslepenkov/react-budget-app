import styled from "styled-components";

interface IProps {
  isOverspend: boolean;
  areaName?: string;
}

export const StyledRemainingBadge = styled.section<IProps>`
  ${(props) => (props.areaName ? `grid-area: ${props.areaName};` : "")}
  display: flex;
  justify-content: flex-start;
  padding: 40px 10px;
  background-color: ${(props) => (props.isOverspend ? "#FF0000" : "#CCD5FF")};
  border-radius: 10px;
`;

export const RemainingBageTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;
