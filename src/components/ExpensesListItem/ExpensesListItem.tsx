import { useCurrencyContext } from "../../context/CurrencyContext";
import { IExpense } from "../../context/ExpensesContext";
import {
  ExpensesListItemCloseBtn,
  ExpensesListItemCost,
  StyledExpensesListItem,
} from "./style";

interface IProps {
  expense: IExpense;
}

export const ExpensesListItem = ({ expense }: IProps) => {
  const { currency } = useCurrencyContext();
  const { id, body, cost } = expense;
  return (
    <StyledExpensesListItem id={id}>
      {body}
      <ExpensesListItemCost>{currency + cost}</ExpensesListItemCost>
      <ExpensesListItemCloseBtn>
        <i className="fa-solid fa-x"></i>
      </ExpensesListItemCloseBtn>
    </StyledExpensesListItem>
  );
};
