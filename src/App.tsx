import { BudgetBadge } from "./components/BudgetBadge";
import { CustomSelect } from "./components/CustomSelect";
import { RemainingBadge } from "./components/RemainingBadge";
import { Title } from "./components/Title";

function App() {
  return (
    <>
      <Title text="Budget App" />
      <CustomSelect />
      <BudgetBadge />
      <RemainingBadge />
    </>
  );
}

export default App;
