import { useCallback, useEffect, useState } from "react";
import { IExpense, useExpensesContext } from "../context/ExpensesContext";

export const useVisibleExpenses = () => {
  const { expenses } = useExpensesContext();
  const [visibleExpenses, setVisibleExpenses] = useState<IExpense[]>(expenses);
  const searchExpenses = useCallback(
    (searchPattern: string): void => {
      setVisibleExpenses(() => {
        return expenses.filter(
          (expense) => !!expense.body.match(searchPattern)
        );
      });
    },
    [expenses]
  );

  useEffect(() => {
    setVisibleExpenses(expenses);
  }, [expenses]);

  return {
    visibleExpenses,
    searchExpenses,
  };
};
