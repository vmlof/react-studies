import "./App.css";
import BalanceDisplay from "./BalanceDisplay";
import AccountOperations from "./AccountOperations";
import Customer from "./CreateCustomer";
import CreateCustomer from "./CreateCustomer";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
