import styled from "styled-components";
import { fonts } from "../../ui";

export const StyledAddExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AddExpenseFormInput = styled.input`
  display: block;
  padding: 15px 20px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  ${fonts.f4}
  &::placeholder {
    color: #999999;
    opacity: 1;
  }
`;

export const AddExpenseFormButton = styled.button`
  padding: 15px 0;
  cursor: pointer;
  background-color: #23c9ff;
  color: #ffffff;
  ${fonts.f4}
  border: none;
  border-radius: 10px;
`;
