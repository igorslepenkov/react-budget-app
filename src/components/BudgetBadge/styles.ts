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
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const BudgetBadgeButton = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export const BudgetBadgeinput = styled.input`
  width: 100%;
  padding: 0;
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  outline: none;
  border: none;
  background-color: transparent;
`;
