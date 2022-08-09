import styled from "styled-components";
import { fonts } from "../../ui";

export const StyledExpensesList = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  list-style: none;
`;

export const StyledExpensesListPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  ${fonts.f2}
`;
