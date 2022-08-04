import Select, { SingleValue } from "react-select";
import { Currencies } from "../../config";
import { useCurrencyContext } from "../../context/CurrencyContext";

interface ISelectOption {
  label: string;
  value: Currencies;
}

export const CustomSelect = () => {
  const options: ISelectOption[] = [
    { label: "USD", value: Currencies.USD },
    { label: "EUR", value: Currencies.EUR },
    { label: "GBP", value: Currencies.GBP },
  ];

  const { currency, setCurrency } = useCurrencyContext();
  const handleSelectChange = (option: SingleValue<ISelectOption>) => {
    if (option) {
      setCurrency(option.value);
    }
  };

  return (
    <Select
      options={options}
      value={options.find(({ value }) => value === currency)}
      onChange={handleSelectChange}
    />
  );
};
