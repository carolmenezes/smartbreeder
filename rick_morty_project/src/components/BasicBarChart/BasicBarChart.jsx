import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  Rectangle,
} from "recharts";
import { useTheme } from "@mui/material";

const GraficoBarras = ({ data, labelField, valueField, axisLabels }) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          fill={theme.palette.background.paper}
        />
        <XAxis dataKey={labelField}>
          <Label value={axisLabels[0] || labelField} offset={0} position="bottom" />
        </XAxis>
        <YAxis
          label={{ value: axisLabels[1] || valueField, angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Bar dataKey={valueField} fill={theme.palette.primary.main} shape={<Rectangle radius={4}/>} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraficoBarras;
