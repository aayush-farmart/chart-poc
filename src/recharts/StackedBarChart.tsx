/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function getRandomColor() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256); // 0 to 255
  const green = Math.floor(Math.random() * 256); // 0 to 255
  const blue = Math.floor(Math.random() * 256); // 0 to 255

  // Convert the RGB values to a hex string
  const hexRed = red.toString(16).padStart(2, "0"); // Convert to hexadecimal and ensure at least two digits
  const hexGreen = green.toString(16).padStart(2, "0");
  const hexBlue = blue.toString(16).padStart(2, "0");

  // Combine the hex values to create the final hex color string
  const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

  return hexColor;
}

export default function StackedBarChart({ data }: any) {
  const keys: string[] = Object.keys(data[0]);

  return (
    <>
      <h1>Recharts Stacked Bar Chart</h1>
      <BarChart
        width={1000}
        height={2000}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis axisLine={false} type="number" />
        <YAxis
          dataKey="key"
          yAxisId={0}
          type="category"
          axisLine={false}
          tickLine={false}
        />

        <Tooltip />
        <Legend />
        {keys.map((key: string) => (
          <Bar dataKey={key} stackId="a" fill={getRandomColor()} />
        ))}
      </BarChart>
    </>
  );
}
