import { useExpensesContext } from "../../context/ExpensesContext";
import { StyledExpensesList } from "./style";
import { ExpensesListItem } from "../ExpensesListItem";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  return (
    <StyledExpensesList>
      {expenses.map((expense) => {
        return <ExpensesListItem key={expense.id} expense={expense} />;
      })}
    </StyledExpensesList>
  );
};
