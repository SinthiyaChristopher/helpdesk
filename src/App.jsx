import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Tickets from "./components/Tickets";
import Sidebar from "./components/Sidebar";
import AllTickets from "./components/AllTickets";
import "./App.css";

const App = () => {
  // Shared tickets state
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Login issue",
      description: "User cannot log in to portal",
      status: "Open",
      priority: "High",
      category: "Technical",
      deadline: "2026-09-30T12:00:00",
      timeline: ["Ticket created"],
      comments: [],
      assignedTo: null,
    },
  ]);

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Pass tickets + setTickets to Tickets */}
            <Route
              path="/tickets"
              element={<Tickets tickets={tickets} setTickets={setTickets} />}
            />
            {/* Pass tickets to AllTickets */}
            <Route path="/alltickets" element={<AllTickets tickets={tickets} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;