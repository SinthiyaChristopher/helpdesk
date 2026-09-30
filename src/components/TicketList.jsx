import React, { useState, useEffect } from "react";

const TicketList = ({ tickets }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filteredTickets = tickets
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      statusFilter === "All" ? true : t.status === statusFilter
    )
    .filter((t) =>
      priorityFilter === "All" ? true : t.priority === priorityFilter
    );

  const paginatedTickets = filteredTickets.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="ticket-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>
        <select onChange={(e) => setPriorityFilter(e.target.value)}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTickets.length === 0 ? (
            <tr>
              <td colSpan="4">No tickets found</td>
            </tr>
          ) : (
            paginatedTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.status}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredTickets.length / pageSize) },
          (_, i) => (
            <button key={i} onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default TicketList;