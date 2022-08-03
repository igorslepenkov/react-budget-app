import { createContext, FC, ReactNode, useState } from "react";
import { Currencies } from "../../config";

interface ICurrencyContext {
  currency: string;
}

export const CurrencyContext = createContext<ICurrencyContext>({
  currency: Currencies.USD,
});

const [currencyValue, setCurrencyValue] = useState<ICurrencyContext>({
  currency: Currencies.USD,
});

export const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CurrencyContext.Provider value={currencyValue}>
      {children}
    </CurrencyContext.Provider>
  );
};
