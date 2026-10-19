import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudentCard({ student, onDelete }) {
  const { id, name, major, year, gpa } = student;

  // each card keeps its own state
  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const email = name.toLowerCase().replace(/\s+/g, ".") + "@studentportal.com";

  return (
    <div className="card student-card h-100 border-0">
      <div className="student-avatar d-flex align-items-end justify-content-center overflow-hidden">
        <svg width="140" height="140" viewBox="0 0 24 24" fill="#8e8e93" aria-hidden="true">
          <circle cx="12" cy="8" r="4.2" />
          <path d="M3 24c0-5.5 4-8.5 9-8.5s9 3 9 8.5z" />
        </svg>
      </div>
      <div className="card-body">
        <h5 className="card-title fs-4 fw-normal">{name}</h5>
        <p className="card-text mb-3">
          ID: {id}<br />
          Major: {major}<br />
          Year: {year}<br />
          GPA: {gpa.toFixed(1)}<br />
          <span className="text-primary">Profile Views: {views}</span>
        </p>

        <div className="d-flex flex-wrap gap-2">
          {/* 1. counter button */}
          <button className="btn btn-outline-primary btn-sm" onClick={() => setViews(views + 1)}>
            View Profile
          </button>

          {/* 2. toggle button */}
          <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>

          {/* 3. router link to the profile page */}
          <Link to={`/students/${id}`} className="btn btn-primary btn-sm">
            Open Profile
          </Link>

          {/* 4. delete button */}
          <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>

        {showDetails && (
          <div className="mt-3 p-2 bg-light border rounded small">
            <div>Email: {email}</div>
            <div>Status: Active</div>
          </div>
        )}
      </div>
    </div>
  );
}
