import { useEffect } from "react";
import { useInput } from "../../hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { StyledSearch } from "./style";

interface IProps {
  searchExpenses: (searchPattern: string) => void;
}

export const Search = ({ searchExpenses }: IProps) => {
  const [{ value, onChange }] = useInput("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    searchExpenses(debouncedValue);
  }, [debouncedValue, searchExpenses]);

  return (
    <StyledSearch placeholder="search ..." onChange={onChange} value={value} />
  );
};
