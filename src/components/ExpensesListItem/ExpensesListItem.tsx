import { useCurrencyContext } from "../../context/CurrencyContext";
import { IExpense } from "../../context/ExpensesContext";
import {
  ExpensesListItemCloseBtn,
  ExpensesListItemCost,
  StyledExpensesListItem,
} from "./style";

interface IProps {
  expense: IExpense;
  deleteExpense: (id: string) => void;
}

export const ExpensesListItem = ({ expense, deleteExpense }: IProps) => {
  const { currency } = useCurrencyContext();
  const { id, body, cost } = expense;
  return (
    <StyledExpensesListItem id={id}>
      {body}
      <ExpensesListItemCost>{currency + cost}</ExpensesListItemCost>
      <ExpensesListItemCloseBtn onClick={() => deleteExpense(id)}>
        <i className="fa-solid fa-x"></i>
      </ExpensesListItemCloseBtn>
    </StyledExpensesListItem>
  );
};
