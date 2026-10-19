import { Link, useParams } from "react-router-dom";
import BreadcrumbNav from "./BreadcrumbNav.jsx";

export default function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((s) => String(s.id) === id);

  if (!student) {
    return (
      <div className="text-center py-5">
        <h4 className="text-danger">Student not found</h4>
        <Link to="/" className="btn btn-primary mt-3">Back to Directory</Link>
      </div>
    );
  }

  const email = student.name.toLowerCase().replace(/\s+/g, ".") + "@studentportal.com";

  return (
    <>
      <BreadcrumbNav items={["Home", "Students", student.name]} />
      <Link to="/" className="btn btn-outline-secondary mb-4">Back to Directory</Link>

      <div className="card student-card border-0 p-4">
        <h2 className="fw-normal">{student.name}</h2>
        <hr />
        <p className="mb-1"><strong>ID:</strong> {student.id}</p>
        <p className="mb-1"><strong>Major:</strong> {student.major}</p>
        <p className="mb-1"><strong>Year:</strong> {student.year}</p>
        <p className="mb-1"><strong>GPA:</strong> {student.gpa.toFixed(1)}</p>
        <p className="mb-0"><strong>Email:</strong> {email}</p>
      </div>
    </>
  );
}
