import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IExpense {
  id: string;
  body: string;
  cost: number;
}

interface IExpenseContext {
  expenses: IExpense[];
}

export const ExpensesContext = createContext<IExpenseContext>({
  expenses: [],
});

const useExpensesValue = () => {
  const [expencesValue, setExpencesValue] = useState<IExpenseContext>(() => ({
    expenses: [],
    setExpenses: (value: IExpense) => {
      setExpencesValue((ctx) => {
        return {
          ...ctx,
          expenses: [...ctx.expenses, value],
        };
      });
    },
    deleteExpence: (id: string) => {
      setExpencesValue((ctx) => {
        return {
          ...ctx,
          expenses: ctx.expenses.filter((expence) => expence.id !== id),
        };
      });
    },
  }));

  return expencesValue;
};

export const useExpensesContext = () =>
  useContext<IExpenseContext>(ExpensesContext);

export const ExpensesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ExpensesContext.Provider value={useExpensesValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
