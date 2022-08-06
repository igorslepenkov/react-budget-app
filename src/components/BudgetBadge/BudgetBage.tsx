import { MouseEventHandler } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext";
import { useToggle, useInput } from "../../hooks";
import {
  BudgetBageButton,
  BudgetBageinput,
  BudgetBageTitle,
  StyledBudgetBage,
} from "./styles";

export const BudgetBage = () => {
  const { currency } = useCurrencyContext();
  const { budget, changeBudgetValue } = useBudgetContext();
  const [isEditMode, toggleIsEditMode] = useToggle(false);
  const [inputOptions, clearinput] = useInput("");

  const handleSaveButton: MouseEventHandler<HTMLButtonElement> = () => {
    changeBudgetValue(Number(inputOptions.value));
    toggleIsEditMode();
    clearinput();
  };

  const handleEditButton: MouseEventHandler<HTMLButtonElement> = () => {
    toggleIsEditMode();
  };

  if (!isEditMode) {
    return (
      <StyledBudgetBage>
        <BudgetBageTitle>Budget: {currency + budget}</BudgetBageTitle>
        <BudgetBageButton onClick={handleEditButton}>Edit</BudgetBageButton>
      </StyledBudgetBage>
    );
  } else {
    return (
      <StyledBudgetBage>
        <BudgetBageinput placeholder="Enter budget ..." {...inputOptions} />
        <BudgetBageButton onClick={handleSaveButton}>Save</BudgetBageButton>
      </StyledBudgetBage>
    );
  }
};
