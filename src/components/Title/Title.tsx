import { StyledTitle } from "./style";

interface IProps {
  text: string;
  areaName?: string;
}

export const Title = ({ text, areaName }: IProps) => {
  return <StyledTitle areaName={areaName}>{text}</StyledTitle>;
};
