/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface StackedBarChartProps {
  data: any;
  keys: string[];
  colors: {
    [key: string]: string;
  };
  width?: number;
  height?: number;
  margin?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  keys,
  colors,
  width = 640,
  height = 400,
  margin = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
}) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if(svgRef.current){
          const svg = d3.select(svgRef.current);
          const keys = Object.keys(data[0]).filter((key) => key !== "key");
          const colorScale = d3
            .scaleOrdinal()
            .domain(keys)
            .range(d3.schemeCategory10);

          const stackGenerator = d3.stack().keys(keys);
          const layers = stackGenerator(data);

          const width = 600;
          const height = 400;
          const margin = { top: 20, right: 20, bottom: 30, left: 40 };

          const xScale = d3
            .scaleBand()
            .domain(data.map((d) => d.key))
            .range([margin.left, width - margin.right])
            .padding(0.1);
          const yScale = d3
            .scaleLinear()
            .domain([
              0,
              d3.max(layers, (layer) =>
                d3.max(layer, (sequence) => sequence[1])
              ),
            ])
            .nice()
            .range([height - margin.bottom, margin.top]);

          svg.selectAll("g").remove();

          const g = svg
            .append("g")
            .selectAll("g")
            .data(layers)
            .join("g")
            .attr("fill", (d) => colorScale(d.key));

          g.selectAll("rect")
            .data((d) => d)
            .join("rect")
            .attr("x", (sequence) => xScale(sequence.data.key))
            .attr("y", (sequence) => yScale(sequence[1]))
            .attr(
              "height",
              (sequence) => yScale(sequence[0]) - yScale(sequence[1])
            )
            .attr("width", xScale.bandwidth());

          const xAxis = d3.axisBottom(xScale);
          const yAxis = d3.axisLeft(yScale);

          svg
            .append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(xAxis);

          svg
            .append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin.left},0)`)
            .call(yAxis);
        }

    }, [data]);

    return (
      <div className="w-full h-full">
        <svg ref={svgRef} className="w-full h-full"></svg>
      </div>
    );
};

export default StackedBarChart;
