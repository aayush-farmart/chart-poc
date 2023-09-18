import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getRandomColor } from "./StackedBarChart";

export default function SimpleLineChart({ data }) {
  return (
    <>
      <h1>Recharts Line Chart</h1>

      <LineChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="average_heat"
          stroke={getRandomColor()}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="heat_runtime"
          stroke={getRandomColor()}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
}
