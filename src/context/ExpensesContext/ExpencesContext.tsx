import { createContext, FC, ReactNode, useContext, useState } from "react";

export interface IExpense {
  id: string;
  body: string;
  cost: number;
}

export interface IExpenseContext {
  expenses: IExpense[];
  addExpense: (value: IExpense) => void;
  deleteExpence: (id: string) => void;
}

export const ExpensesContext = createContext<IExpenseContext>({
  expenses: [],
  addExpense: (value: IExpense) => {},
  deleteExpence: (id: string) => {},
});

const useExpensesValue = () => {
  const [expencesValue, setExpencesValue] = useState<IExpenseContext>(() => ({
    expenses: [],
    addExpense: (value: IExpense) => {
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
