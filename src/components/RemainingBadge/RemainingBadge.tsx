import { useRemaining } from "../../hooks/useRemaining";
import { RemainingBageTitle, StyledRemainingBadge } from "./style";

export const RemainingBadge = () => {
  const remaining = useRemaining();
  return (
    <StyledRemainingBadge isOverspend={remaining < 0}>
      <RemainingBageTitle>
        {remaining < 0
          ? `Overspending: ${remaining}`
          : `Remaining: ${remaining}`}
      </RemainingBageTitle>
    </StyledRemainingBadge>
  );
};
