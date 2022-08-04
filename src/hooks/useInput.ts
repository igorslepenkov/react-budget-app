import { ChangeEventHandler, useState } from "react";

export const useInput = (
  initialValue: string
): [string, ChangeEventHandler<HTMLInputElement>, () => void] => {
  const [inputValue, setinputValue] = useState<string>(initialValue);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setinputValue(target.value);
  };
  const clearInput = () => {
    setinputValue("");
  };

  return [inputValue, handleInputChange, clearInput];
};
