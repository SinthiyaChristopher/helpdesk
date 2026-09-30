import React, { useState } from "react";

const CommentSection = ({ ticket, onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") return;
    onAddComment(ticket.id, {
      author: "Agent A", // you can replace with logged-in user
      text: commentText,
      timestamp: new Date().toLocaleString(),
    });
    setCommentText("");
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <ul>
        {ticket.comments.map((c, idx) => (
          <li key={idx}>
            <strong>{c.author}:</strong> {c.text} <em>({c.timestamp})</em>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;