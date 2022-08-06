import styled from "styled-components";

interface IProps {
  isOverspend: boolean;
}

export const StyledRemainingBadge = styled.section<IProps>`
  display: flex;
  justify-content: flex-start;
  background-color: ${(props) => (props.isOverspend ? "#FF0000" : "#CCD5FF")};
  border-radius: 10px;
`;

export const RemainingBageTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;
