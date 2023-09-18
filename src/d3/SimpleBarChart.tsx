/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface SimpleBarChartProps {
  data: { letter: string; frequency: number }[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const SimpleBarChart: React.FC<SimpleBarChartProps> = ({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginBottom = 20,
  marginLeft = 20,
  marginRight = 20,
}) => {
  const gx = useRef<SVGSVGElement | null>(null);
  const gy = useRef<SVGSVGElement | null>(null);

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.letter))
    .range([marginLeft, width - marginRight])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.frequency) as number])
    .nice()
    .range([height - marginBottom, marginTop]);

  useEffect(() => {
    if (gx.current) {
      d3.select(gx.current).call(d3.axisBottom(x));
    }
  }, [gx, x]);
  useEffect(() => {
    if (gy.current) {
      d3.select(gy.current).call(d3.axisLeft(y));
    }
  }, [gy, y]);

  useEffect(() => {}, [data]);
  return (
    <>
      <h1>D3 Simple Bar Chart</h1>
      <svg width={width} height={height}>
        <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
        <g ref={gy} transform={`translate(${marginLeft},0)`} />
        {data.map(({ letter, frequency }) => (
          <rect
            key={letter}
            x={x(letter)}
            y={y(frequency)}
            width={x.bandwidth()}
            height={height - marginBottom - y(frequency)}
            fill="steelblue"
          />
        ))}
      </svg>
    </>
  );
};
export default SimpleBarChart;
