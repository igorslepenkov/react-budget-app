import styled from "styled-components";

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
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  margin: 0;
`;

export const BudgetBadgeButton = styled.button`
  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

export const BudgetBadgeinput = styled.input`
  width: 100%;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  outline: none;
  border: none;
  background-color: transparent;
`;
