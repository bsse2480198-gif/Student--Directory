import StudentCard from "./StudentCard.jsx";

export default function StudentGrid({ students, onView, onDelete }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-center mb-4">
      {students.map((s) => (
        <div className="col" key={s.id}>
          <StudentCard student={s} onView={onView} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}
