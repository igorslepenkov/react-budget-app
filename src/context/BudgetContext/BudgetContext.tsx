import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IBudgetContext {
  budget: number;
  changeBudgetValue: (value: number) => void;
  addValueToBudget: (value: number) => void;
  subtractValueFromBudget: (value: number) => void;
}

export const BudgetContext = createContext<IBudgetContext>({
  budget: 0,
  changeBudgetValue: (value: number) => {},
  addValueToBudget: (value: number) => {},
  subtractValueFromBudget: (value: number) => {},
});

const useBudgetValue = () => {
  const [budgetValue, setBadgetValue] = useState<IBudgetContext>(() => ({
    budget: 0,
    changeBudgetValue: (value: number) => {
      setBadgetValue((ctx) => {
        return {
          ...ctx,
          budget: value,
        };
      });
    },
    addValueToBudget: (value: number) => {
      setBadgetValue((ctx) => {
        return {
          ...ctx,
          budget: ctx.budget + value,
        };
      });
    },
    subtractValueFromBudget: (value: number) => {
      setBadgetValue((ctx) => {
        return {
          ...ctx,
          budget: ctx.budget - value,
        };
      });
    },
  }));
  return budgetValue;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BudgetContext.Provider value={useBudgetValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
