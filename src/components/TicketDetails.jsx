import React from "react";

const TicketDetails = ({ ticket }) => {
  return (
    <div className="ticket-details">
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Category: {ticket.category}</p>

      <h3>Activity Timeline</h3>
      <ul>
        {ticket.timeline.map((event, idx) => (
          <li key={idx}>{event}</li>
        ))}
      </ul>

      <h3>Comments</h3>
      <ul>
        {ticket.comments.map((c, idx) => (
          <li key={idx}>
            <strong>{c.author}:</strong> {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketDetails;