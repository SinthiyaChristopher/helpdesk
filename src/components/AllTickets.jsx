import React from "react";
import "./Tickets.css"; // optional styling file

const AllTickets = () => {
  // Example ticket data
  const tickets = [
    { id: 1, title: "Login issue", status: "Open", priority: "High" },
    { id: 2, title: "Payment gateway error", status: "In Progress", priority: "Medium" },
    { id: 3, title: "UI bug on dashboard", status: "Resolved", priority: "Low" },
    { id: 4, title: "Email notifications not working", status: "Open", priority: "High" },
  ];

  return (
    <div className="tickets-page">
      <header className="tickets-header">
        <h1>All Tickets</h1>
      </header>

      <table className="tickets-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllTickets;