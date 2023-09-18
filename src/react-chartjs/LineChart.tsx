import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ data }) {
  return (
    <Line
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "React-chartjs2 Line Chart",
          },
          legend: {
            display: true,
            position: "right",
          },
        },
      }}
    />
  );
}
