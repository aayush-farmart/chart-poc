import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  //   maintainAspectRatio: false,
  indexAxis: "y" as const,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export default function StackedBarChart({ data }) {
  return (
    <Bar
      width={1000}
      height={2000}
      options={options}
      data={data}
      datasetIdKey="key"
    />
  );
}
