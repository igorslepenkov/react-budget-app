import { useCurrencyContext } from "../../context/CurrencyContext";
import { useRemaining } from "../../hooks";
import { RemainingBageTitle, StyledRemainingBadge } from "./style";

interface IProps {
  areaName?: string;
}

export const RemainingBadge = ({ areaName }: IProps) => {
  const remaining = useRemaining();
  const { currency } = useCurrencyContext();
  return (
    <StyledRemainingBadge isOverspend={remaining < 0} areaName={areaName}>
      <RemainingBageTitle>
        {remaining < 0
          ? `Overspending: ${currency + remaining * -1}`
          : `Remaining: ${currency + remaining}`}
      </RemainingBageTitle>
    </StyledRemainingBadge>
  );
};
