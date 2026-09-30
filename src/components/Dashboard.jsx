import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Example ticket data
  const data = {
    labels: ["Open", "In Progress", "Resolved", "High Priority"],
    datasets: [
      {
        label: "Tickets",
        data: [6, 3, 3, 4], // replace with your state values
        backgroundColor: "#007bff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Ticket Status Overview" },
    },
  };

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Good morning, Admin 👋</h1>
      </header>

      {/* Summary cards */}
      <div className="summary-cards">
        <div className="card">Total Tickets: 12</div>
        <div className="card">Open Tickets: 6</div>
        <div className="card">In Progress: 3</div>
        <div className="card">Resolved: 3</div>
        <div className="card">High Priority: 4</div>
      </div>

      {/* Bar Chart */}
      <div className="chart-box">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;