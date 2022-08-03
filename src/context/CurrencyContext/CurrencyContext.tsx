import { createContext, FC, ReactNode, useState } from "react";
import { Currencies } from "../../config";

interface ICurrencyContext {
  currency: string;
}

export const CurrencyContext = createContext<ICurrencyContext>({
  currency: Currencies.USD,
});

const useCurrencyValue = () => {
  const [currencyValue, setCurrencyValue] = useState<ICurrencyContext>({
    currency: Currencies.USD,
  });

  return {
    currencyValue,
    setCurrencyValue,
  };
};

export const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CurrencyContext.Provider value={useCurrencyValue().currencyValue}>
      {children}
    </CurrencyContext.Provider>
  );
};
