import { MouseEventHandler } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext";
import { useToggle, useInput } from "../../hooks";
import {
  BudgetBadgeButton,
  BudgetBadgeinput,
  BudgetBadgeTitle,
  StyledBudgetBadge,
} from "./styles";

interface IProps {
  areaName?: string;
}

export const BudgetBadge = ({ areaName }: IProps) => {
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
      <StyledBudgetBadge areaName={areaName}>
        <BudgetBadgeTitle>Budget: {currency + budget}</BudgetBadgeTitle>
        <BudgetBadgeButton onClick={handleEditButton}>Edit</BudgetBadgeButton>
      </StyledBudgetBadge>
    );
  } else {
    return (
      <StyledBudgetBadge areaName={areaName}>
        <span>
          <BudgetBadgeinput placeholder="Enter budget ..." {...inputOptions} />
        </span>
        <BudgetBadgeButton onClick={handleSaveButton}>Save</BudgetBadgeButton>
      </StyledBudgetBadge>
    );
  }
};
