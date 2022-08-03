import { StyledTitle } from "./style";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};
