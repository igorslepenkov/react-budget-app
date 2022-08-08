import { AddExpenseForm } from "./components/AddExpenseForm";
import { Expenses } from "./components/Expenses";
import { Header } from "./components/Header";
import { GlobalStyles } from "./ui";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Expenses />
      <AddExpenseForm />
    </>
  );
}

export default App;
