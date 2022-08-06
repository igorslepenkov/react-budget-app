import { useEffect, useState } from "react";
import { useExpensesContext } from "../context/ExpensesContext/ExpencesContext";

export const useSpent = () => {
  const { expenses } = useExpensesContext();
  const [spent, setSpent] = useState<number>(() => {
    return expenses.reduce((acc, expense) => {
      return (acc += expense.cost);
    }, 0);
  });
  useEffect(() => {
    setSpent(() => {
      return expenses.reduce((acc, expense) => {
        return (acc += expense.cost);
      }, 0);
    });
  }, [expenses]);

  return spent;
};
