/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Chart, Title, AxisOptions } from "react-charts";

export interface StackedBarChartProps {
  data: any;
}

const StackedBarChart = ({ data }) => {
  const primaryAxis = React.useMemo<AxisOptions<any>>(
    () => ({
      position: "left",
      getValue: (datum) => datum.primary,
    }),
    []
  );
  const secondaryAxes = React.useMemo<AxisOptions<any>[]>(
    () => [
      {
        position: "bottom",
        getValue: (datum) => datum.secondary,
        stacked: true,
      },
    ],
    []
  );
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Chart options={{ data, primaryAxis, secondaryAxes }}>
        <Title>React-Charts Stacked Bar Chart</Title>
      </Chart>
    </div>
  );
};

export default StackedBarChart;
