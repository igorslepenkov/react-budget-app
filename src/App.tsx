import { AddExpenseForm } from "./components/AddExpenseForm";
import { Expenses } from "./components/Expenses";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Expenses />
      <AddExpenseForm />
    </>
  );
}

export default App;
