import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-areas:
    "title select"
    "budget budget"
    "remain remain"
    "spent spent";
  align-items: baseline;
  grid-row-gap: 20px;
`;
