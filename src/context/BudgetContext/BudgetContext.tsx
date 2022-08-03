import { createContext, FC, ReactNode, useState } from "react";

interface IBudgetContext {
  budget: number;
}

export const BudgetContext = createContext<IBudgetContext>({
  budget: 0,
});

const useBudgetValue = () => {
  const [budgetValue, setBadgetValue] = useState<IBudgetContext>(() => ({
    budget: 0,
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

export const BudgetProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BudgetContext.Provider value={useBudgetValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
