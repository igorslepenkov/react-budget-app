import { ExpensesList } from "../ExpensesList";
import { Search } from "../Search";
import { Title } from "../Title";
import { StyledExpenses } from "./style";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <Search />
      <ExpensesList />
    </StyledExpenses>
  );
};
