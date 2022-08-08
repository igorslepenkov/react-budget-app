import { useForm } from "react-hook-form";
import { Title } from "../Title";
import {
  AddExpenseFormButton,
  AddExpenseFormInput,
  StyledAddExpenseForm,
} from "./style";

export const AddExpenseForm = () => {
  const { register, handleSubmit } = useForm();
  const onSymbit = (data: any) => {
    console.log(data);
  };
  return (
    <StyledAddExpenseForm onSubmit={handleSubmit(onSymbit)}>
      <Title text="Add Expense" />
      <AddExpenseFormInput {...register("name")} placeholder="enter name ..." />
      <AddExpenseFormInput {...register("cost")} placeholder="enter cost ..." />
      <AddExpenseFormButton>Done</AddExpenseFormButton>
    </StyledAddExpenseForm>
  );
};
