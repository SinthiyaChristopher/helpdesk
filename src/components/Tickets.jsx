import React, { useState } from "react";
import TicketList from "../components/TicketList";
import TicketForm from "../components/TicketForm";
import TicketDetails from "../components/TicketDetails";
import SLAIndicator from "../components/SLAIndicator";
import AssignModal from "../components/AssignModal";
import Toast from "../components/Toast";
import CommentSection from "../components/CommentSection";
import { Link } from "react-router-dom";
import "./tickets.css";

const Tickets = ({ tickets, setTickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [toast, setToast] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);

  const agents = [
    { id: 1, name: "Agent A" },
    { id: 2, name: "Agent B" },
    { id: 3, name: "Agent C" },
  ];

  const addTicket = (newTicket) => {
    setTickets([
      ...tickets,
      { ...newTicket, id: Date.now(), status: "Open", timeline: [], comments: [] },
    ]);
    setToast({ type: "success", message: "Ticket created successfully!" });
  };

  const assignTicket = (id, agentName) => {
    setTickets(
      tickets.map((t) =>
        t.id === id
          ? { ...t, assignedTo: agentName, timeline: [...t.timeline, `Assigned to ${agentName}`] }
          : t
      )
    );
    setToast({ type: "info", message: `Ticket assigned to ${agentName}` });
  };

  const addComment = (id, comment) => {
    setTickets(
      tickets.map((t) =>
        t.id === id ? { ...t, comments: [...t.comments, comment] } : t
      )
    );
    setToast({ type: "success", message: "Comment added!" });
  };

  return (
    <div className="tickets-page">
      <header className="header1">
        <h1>Helpdesk Support - Tickets</h1>
        <nav className="nav-links">
          <Link to="/">Dashboard</Link>
        </nav>
      </header>

      <div className="tickets-grid">
        <div className="left-panel">
          <TicketForm onSubmit={addTicket} />
          <TicketList tickets={tickets} onSelect={setSelectedTicket} />
        </div>

        <div className="right-panel">
          {selectedTicket ? (
            <>
              <TicketDetails ticket={selectedTicket} />
              <SLAIndicator deadline={selectedTicket.deadline} />
              <CommentSection ticket={selectedTicket} onAddComment={addComment} />
              <button onClick={() => setShowAssignModal(true)}>Assign Ticket</button>
            </>
          ) : (
            <p>Select a ticket to view details</p>
          )}
        </div>
      </div>

      {showAssignModal && (
        <AssignModal
          ticket={selectedTicket}
          agents={agents}
          onAssign={assignTicket}
          onClose={() => setShowAssignModal(false)}
        />
      )}

      {toast && <Toast type={toast.type} message={toast.message} />}
    </div>
  );
};

export default Tickets;