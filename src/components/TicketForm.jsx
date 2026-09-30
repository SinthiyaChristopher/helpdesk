import React, { useState } from "react";
import { validateTicket } from "../hooks/validation";

const TicketForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "General",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateTicket(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <input
        type="text"
        name="title"
        placeholder="Ticket Title"
        value={formData.title}
        onChange={handleChange}
      />
      {errors.title && <span className="error">{errors.title}</span>}

      <textarea
        name="description"
        placeholder="Describe the issue"
        value={formData.description}
        onChange={handleChange}
      />
      {errors.description && <span className="error">{errors.description}</span>}

      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select name="category" value={formData.category} onChange={handleChange}>
        <option>General</option>
        <option>Technical</option>
        <option>Billing</option>
      </select>

      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default TicketForm;