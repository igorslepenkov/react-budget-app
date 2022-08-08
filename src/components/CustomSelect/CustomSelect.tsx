import Select, { SingleValue } from "react-select";
import { Currency } from "../../config";
import { useCurrencyContext } from "../../context/CurrencyContext";

interface IProps {
  areaName?: string;
}

interface ISelectOption {
  label: keyof typeof Currency;
  value: Currency;
}

export const CustomSelect = ({ areaName }: IProps) => {
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
      styles={{
        container: (provided) => ({
          ...provided,
          gridArea: areaName || "auto",
          width: "fit-content",
          justifySelf: "end",
          fontFamily: "Inter",
          fontSize: "12px",
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "15px",
          "@media (min-width: 375px)": {
            fontSize: "14px",
            lineHeight: "17px",
          },
          "@media (min-width: 768px)": {
            fontSize: "18px",
            lineHeight: "23px",
          },
          "@media (min-width: 1200px)": {
            fontSize: "24px",
            lineHeight: "28px",
          },
        }),
      }}
      options={options}
      value={options.find(({ value }) => value === currency)}
      onChange={handleSelectChange}
    />
  );
};
