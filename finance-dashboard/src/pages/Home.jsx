import { useApp } from "../context/AppContext";
import Card from "../components/Card";
import RoleToggle from "../components/RoleToggle";
import Transactions from "../components/Transactions";
import InsightsBox from "../components/InsightsBox";
import TrendChart from "../components/charts/TrendChart";
import CategoryChart from "../components/charts/CategoryChart";

const Home = () => {
  const { list, role, addItem } = useApp();

  const income = list.filter(i => i.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = list.filter(i => i.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="container">
      <RoleToggle />

      {role === "admin" && (
        <button onClick={addItem}>Add Transaction</button>
      )}

      <div className="cards">
        <Card label="Balance" value={income - expense} />
        <Card label="Income" value={income} />
        <Card label="Expense" value={expense} />
      </div>

      <div className="charts">
        <TrendChart data={list} />
        <CategoryChart data={list} />
      </div>

      <Transactions />
      <InsightsBox />
    </div>
  );
};

export default Home;