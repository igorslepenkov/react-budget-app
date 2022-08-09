import { StyledExpensesList, StyledExpensesListPlaceholder } from "./style";
import { ExpensesListItem } from "../ExpensesListItem";
import { IExpense } from "../../context/ExpensesContext";

interface IProps {
  visibleExpenses: IExpense[];
  deleteExpense: (id: string) => void;
}

export const ExpensesList = ({ visibleExpenses, deleteExpense }: IProps) => {
  if (visibleExpenses.length !== 0) {
    return (
      <StyledExpensesList>
        {visibleExpenses.map((expense) => {
          return (
            <ExpensesListItem
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          );
        })}
      </StyledExpensesList>
    );
  }

  return (
    <StyledExpensesListPlaceholder>Oooops 🙈</StyledExpensesListPlaceholder>
  );
};
