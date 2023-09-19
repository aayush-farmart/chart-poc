import Plot from "react-plotly.js";

export default function PlotlyStackedBarChart({ data }) {
  return (
    <Plot
      data={data}
      layout={{ barmode: "stack", height: 1000, width: 1000 }}
    />
  );
}
