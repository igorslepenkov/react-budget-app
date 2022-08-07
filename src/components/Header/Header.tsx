import { BudgetBadge } from "../BudgetBadge";
import { CustomSelect } from "../CustomSelect";
import { RemainingBadge } from "../RemainingBadge";
import { SpentBadge } from "../SpentBadge";
import { Title } from "../Title";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Title text="Budget App" areaName="title" />
      <CustomSelect areaName="select" />
      <BudgetBadge areaName="budget" />
      <RemainingBadge areaName="remain" />
      <SpentBadge areaName="spent" />
    </StyledHeader>
  );
};
