import { BudgetBage } from "./components/BudgetBadge";
import { CustomSelect } from "./components/CustomSelect";
import { Title } from "./components/Title";

function App() {
  return (
    <>
      <Title text="Budget App" />
      <CustomSelect />
      <BudgetBage />
    </>
  );
}

export default App;
