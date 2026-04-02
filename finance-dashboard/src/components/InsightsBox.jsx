import { useApp } from "../context/AppContext";

const InsightsBox = () => {
  const { list } = useApp();

  const expenses = list.filter(i => i.type === "expense");

  let max = 0, cat = "";

  expenses.forEach(e => {
    if (e.amount > max) {
      max = e.amount;
      cat = e.category;
    }
  });

  return (
    <div className="section">
      <h3>Insights</h3>
      <p>Highest spending: {cat} (₹{max})</p>
      <p>Total transactions: {list.length}</p>
    </div>
  );
};

export default InsightsBox;