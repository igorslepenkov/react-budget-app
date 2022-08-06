import Select, { SingleValue } from "react-select";
import { Currency } from "../../config";
import { useCurrencyContext } from "../../context/CurrencyContext";

interface ISelectOption {
  label: keyof typeof Currency;
  value: Currency;
}

export const CustomSelect = () => {
  const options: ISelectOption[] = [
    { label: "USD", value: Currency.USD },
    { label: "EUR", value: Currency.EUR },
    { label: "GBP", value: Currency.GBP },
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
