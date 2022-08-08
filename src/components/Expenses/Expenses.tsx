import { useExpensesContext } from "../../context/ExpensesContext";
import { useVisibleExpenses } from "../../hooks";
import { ExpensesList } from "../ExpensesList";
import { Search } from "../Search";
import { Title } from "../Title";
import { StyledExpenses } from "./style";

export const Expenses = () => {
  const { deleteExpence } = useExpensesContext();
  const { visibleExpenses, searchExpenses } = useVisibleExpenses();

  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <Search searchExpenses={searchExpenses} />
      <ExpensesList
        deleteExpense={deleteExpence}
        visibleExpenses={visibleExpenses}
      />
    </StyledExpenses>
  );
};
