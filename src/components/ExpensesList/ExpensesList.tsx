import { useExpensesContext } from "../../context/ExpensesContext";
import { StyledExpensesList } from "./style";
import { v4 as uuidv4 } from "uuid";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  return (
    <StyledExpensesList>
      {expenses.map((expense) => {
        return <li key={expense.id}>{expense.body}</li>;
      })}
    </StyledExpensesList>
  );
};
