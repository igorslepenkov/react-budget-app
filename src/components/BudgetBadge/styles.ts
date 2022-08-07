import styled from "styled-components";
import { fonts } from "../../ui";

interface IProps {
  areaName?: string;
}

export const StyledBudgetBadge = styled.section<IProps>`
  ${(props) => (props.areaName ? `grid-area: ${props.areaName};` : "")}
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 40px 10px;
  background-color: #7cc6fe;
  border-radius: 10px;
`;

export const BudgetBadgeTitle = styled.h3`
  margin: 0;
  ${fonts.f2}
`;

export const BudgetBadgeButton = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  ${fonts.f3}
`;

export const BudgetBadgeinput = styled.input`
  width: 100%;
  padding: 0;
  color: #ffffff;
  ${fonts.f2}
  outline: none;
  border: none;
  background-color: transparent;

  &::placeholder {
    color: #ffffff;
    opacity: 1;
  }
`;
