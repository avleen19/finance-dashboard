import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const TrendChart = ({ data }) => {
  if (!data) return null;

  return (
    <LineChart width={400} height={200} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line dataKey="amount" />
    </LineChart>
  );
};

export default TrendChart;