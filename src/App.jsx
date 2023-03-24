import "./App.css";
import {
  User,
  CardOverview,
  AddTransaction,
  Transactions,
} from "./components/componentExport.jsx";

function App() {
  return (
    <div className="body">
      <User />
      <CardOverview />
      <AddTransaction />
      <Transactions />
    </div>
  );
}

export default App;
