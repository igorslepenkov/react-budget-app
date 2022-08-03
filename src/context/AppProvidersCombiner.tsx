import { FC, ReactNode } from "react";
import { BudgetProvider } from "./BudgetContext";
import { CurrencyProvider } from "./CurrencyContext";
import { ExpensesProvider } from "./ExpensesContext";

export const AppProvidersCombiner: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const providers = [BudgetProvider, CurrencyProvider, ExpensesProvider];

  return (
    <>
      {providers.reduce((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
};
