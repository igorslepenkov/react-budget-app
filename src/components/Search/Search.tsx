import { useEffect } from "react";
import { useInput } from "../../hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { StyledSearch } from "./style";

interface IProps {
  searchExpenses: (searchPattern: string) => void;
}

export const Search = ({ searchExpenses }: IProps) => {
  const [inputStateConfig] = useInput("");
  const { value } = inputStateConfig;
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    searchExpenses(debouncedValue);
  }, [searchExpenses, debouncedValue]);

  return <StyledSearch placeholder="search ..." {...inputStateConfig} />;
};
