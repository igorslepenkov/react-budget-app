import { useCurrencyContext } from "../../context/CurrencyContext";
import { useSpent } from "../../hooks";
import { SpentBadgeTitle, StyledSpentBadge } from "./style";

export const SpentBadge = () => {
  const spent = useSpent();
  const { currency } = useCurrencyContext();
  return (
    <StyledSpentBadge>
      <SpentBadgeTitle>Spent so far {currency + spent}</SpentBadgeTitle>
    </StyledSpentBadge>
  );
};
