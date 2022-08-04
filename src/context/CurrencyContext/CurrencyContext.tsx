import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Currencies } from "../../config";

interface ICurrencyContext {
  currency: string;
  setCurrency: (value: Currencies) => void;
}

export const CurrencyContext = createContext<ICurrencyContext>({
  currency: Currencies.USD,
  setCurrency: (value: Currencies) => {},
});

const useCurrencyValue = () => {
  const [currencyValue, setCurrencyValue] = useState<ICurrencyContext>(() => {
    return {
      currency: Currencies.USD,
      setCurrency: (value: Currencies) => {
        setCurrencyValue((ctx) => {
          return {
            ...ctx,
            currency: value,
          };
        });
      },
    };
  });

  return currencyValue;
};

export const useCurrencyContext = () =>
  useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CurrencyContext.Provider value={useCurrencyValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
