import { BudgetBadge } from "./components/BudgetBadge";
import { CustomSelect } from "./components/CustomSelect";
import { RemainingBadge } from "./components/RemainingBadge";
import { SpentBadge } from "./components/SpentBadge";
import { Title } from "./components/Title";

function App() {
  return (
    <>
      <Title text="Budget App" />
      <CustomSelect />
      <BudgetBadge />
      <RemainingBadge />
      <SpentBadge />
    </>
  );
}

export default App;
