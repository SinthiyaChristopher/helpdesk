import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Charts = ({ tickets }) => {
  // Prepare data for chart
  const priorityData = [
    { name: "Low", value: tickets.filter((t) => t.priority === "Low").length },
    { name: "Medium", value: tickets.filter((t) => t.priority === "Medium").length },
    { name: "High", value: tickets.filter((t) => t.priority === "High").length },
  ];

  return (
    <div className="bar-chart">
      <h2>Tickets by Priority</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={priorityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Charts;