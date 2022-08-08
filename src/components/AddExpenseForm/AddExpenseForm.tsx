import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpensesContext";
import { Title } from "../Title";
import {
  AddExpenseFormButton,
  AddExpenseFormError,
  AddExpenseFormInput,
  StyledAddExpenseForm,
} from "./style";
import { v4 as uuidv4 } from "uuid";

type IFormInput = {
  name: string;
  cost: number;
};

export const AddExpenseForm = () => {
  const { addExpense } = useExpensesContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSymbit: SubmitHandler<IFormInput> = ({ name, cost }) => {
    addExpense({
      id: uuidv4(),
      body: name,
      cost,
    });
    reset();
  };
  return (
    <StyledAddExpenseForm onSubmit={handleSubmit(onSymbit)}>
      <Title text="Add Expense" />
      <AddExpenseFormInput
        {...register("name", {
          required: "Please fill in the name",
        })}
        placeholder="enter name ..."
        type="text"
      />
      {errors.name && (
        <AddExpenseFormError>{errors.name.message}</AddExpenseFormError>
      )}
      <AddExpenseFormInput
        {...register("cost", {
          required: "Please fill in the cost",
          valueAsNumber: true,
        })}
        placeholder="enter cost ..."
        type="number"
      />
      {errors.cost && (
        <AddExpenseFormError>{errors.cost.message}</AddExpenseFormError>
      )}
      <AddExpenseFormButton type="submit">Done</AddExpenseFormButton>
    </StyledAddExpenseForm>
  );
};
