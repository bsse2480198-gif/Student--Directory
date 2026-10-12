export default function StudentCard({ student, onView, onDelete }) {
  const { id, name, major, year, gpa } = student;
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
          GPA: {gpa.toFixed(1)}
        </p>
        <button className="btn btn-outline-primary btn-sm me-2" onClick={() => onView(student)}>
          View Profile
        </button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
