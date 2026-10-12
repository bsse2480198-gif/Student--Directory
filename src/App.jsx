import { useState } from "react";
import AppNavbar from "./components/AppNavbar.jsx";
import BreadcrumbNav from "./components/BreadcrumbNav.jsx";
import PageHeader from "./components/PageHeader.jsx";
import StudentGrid from "./components/StudentGrid.jsx";
import PaginationBar from "./components/PaginationBar.jsx";
import AlertBanner from "./components/AlertBanner.jsx";
import Footer from "./components/Footer.jsx";
import { initialStudents } from "./data.js";

const PER_PAGE = 4;

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [page, setPage] = useState(1);
  const [alertMsg, setAlertMsg] = useState("Student records have been successfully updated.");

  const totalPages = Math.max(1, Math.ceil(students.length / PER_PAGE));
  const visible = students.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const changePage = (p) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  const handleDelete = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
    const newTotal = Math.max(1, Math.ceil(updated.length / PER_PAGE));
    if (page > newTotal) setPage(newTotal);
    setAlertMsg("Student records have been successfully updated.");
  };

  const handleView = (s) => alert(`${s.name}\nID: ${s.id}\nMajor: ${s.major}\nYear: ${s.year}\nGPA: ${s.gpa}`);

  const handleAdd = () => {
    const nextId = Math.max(0, ...students.map((s) => s.id)) + 1;
    setStudents([...students, { id: nextId, name: "New Student", major: "Computer Science", year: 1, gpa: 3.0 }]);
    setAlertMsg("Student records have been successfully updated.");
  };

  return (
    <>
      <AppNavbar brand="StudentPortal" links={["Dashboard", "Students", "Courses", "Reports"]} />

      <main className="container">
        <BreadcrumbNav items={["Home", "Students", "Directory"]} />
        <PageHeader title="Page Header" buttonText="Add New Student" onButtonClick={handleAdd} />
        <StudentGrid students={visible} onView={handleView} onDelete={handleDelete} />
        <PaginationBar currentPage={page} totalPages={totalPages} onPageChange={changePage} />
        {alertMsg && <AlertBanner message={alertMsg} type="info" onClose={() => setAlertMsg("")} />}
      </main>

      <Footer
        links={["Home", "Computer Science", "Courses", "Reports"]}
        contact={["Contact Us", "+1: 123 456 7890", "trm@studentportal.com"]}
        copyright="© 2024 StudentPortal. All rights reserved."
      />
    </>
  );
}
