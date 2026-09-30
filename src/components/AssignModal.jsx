import React, { useState } from "react";

const AssignModal = ({ ticket, agents, onAssign, onClose }) => {
  const [selectedAgent, setSelectedAgent] = useState("");

  const handleAssign = () => {
    if (selectedAgent) {
      onAssign(ticket.id, selectedAgent);
      onClose();
    }
  };

  return (
    <div className="modal">
      <h2>Assign Ticket</h2>
      <select
        value={selectedAgent}
        onChange={(e) => setSelectedAgent(e.target.value)}
      >
        <option value="">Select Agent</option>
        {agents.map((agent) => (
          <option key={agent.id} value={agent.name}>
            {agent.name}
          </option>
        ))}
      </select>
      <div className="modal-actions">
        <button onClick={handleAssign}>Assign</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AssignModal;