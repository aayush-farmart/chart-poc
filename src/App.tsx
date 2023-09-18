/* eslint-disable @typescript-eslint/no-explicit-any */

import "./App.css";
import SimpleBarChart from "./d3/SimpleBarChart";
import { data } from "./dummyData/alphabet";
import stackedData, { labels } from "./dummyData/heat";
// import StackedHorizontalBarChart from "./react-charts/StackedBarChart";
import StackedBarChart, { getRandomColor } from "./recharts/StackedBarChart";
import StackedBarChartjs from "./react-chartjs/StackedBarChart";
import LineChart from "./react-chartjs/LineChart";
import SimpleLineChart from "./recharts/LineChart";

function App() {
  const chartjsLineData = {
    labels: stackedData.map((d) => d.key),
    datasets: [
      {
        label: "average_heat",
        data: stackedData.map((d) => d.average_heat),
        backgroundColor: getRandomColor(),
      },
      {
        label: "heat_runtime",
        data: stackedData.map((d) => d.heat_runtime),
        backgroundColor: getRandomColor(),
      },
    ],
  };
  const chartjsBarData = {
    labels: stackedData.map((d) => d.key),
    datasets: labels.map((l) => {
      return {
        label: l,
        data: stackedData.map((d) => d[l]),
        backgroundColor: getRandomColor(),
      };
    }),
  };
  return (
    <>
      <SimpleBarChart data={data} />
      <StackedBarChart data={stackedData} />
      {/* <StackedHorizontalBarChart data={stackedData} /> */}
      <StackedBarChartjs data={chartjsBarData} />
      <LineChart data={chartjsLineData} />
      <SimpleLineChart data={stackedData} />
    </>
  );
}

export default App;
