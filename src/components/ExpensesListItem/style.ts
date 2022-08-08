import styled from "styled-components";
import { fonts } from "../../ui";

export const StyledExpensesListItem = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 15px 20px;
  border-bottom: 1px solid #ccd5ff;
  ${fonts.f4}
`;

export const ExpensesListItemCost = styled.div`
  padding: 5px 15px;
  text-align: center;
  background: #23c9ff;
  border-radius: 10px;
  ${fonts.f5};
`;

export const ExpensesListItemCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #c884a6;
  cursor: pointer;
`;
