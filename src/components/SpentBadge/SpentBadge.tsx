import { useCurrencyContext } from "../../context/CurrencyContext";
import { useSpent } from "../../hooks";
import { SpentBadgeTitle, StyledSpentBadge } from "./style";

interface IProps {
  areaName?: string;
}

export const SpentBadge = ({ areaName }: IProps) => {
  const spent = useSpent();
  const { currency } = useCurrencyContext();
  return (
    <StyledSpentBadge areaName={areaName}>
      <SpentBadgeTitle>Spent so far: {currency + spent}</SpentBadgeTitle>
    </StyledSpentBadge>
  );
};
