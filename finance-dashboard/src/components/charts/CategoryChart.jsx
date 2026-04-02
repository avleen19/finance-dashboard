import { PieChart, Pie, Tooltip } from "recharts";

const CategoryChart = ({ data }) => {
  if (!data) return null;

  return (
    <PieChart width={300} height={200}>
      <Pie data={data} dataKey="amount" nameKey="category" />
      <Tooltip />
    </PieChart>
  );
};

export default CategoryChart;