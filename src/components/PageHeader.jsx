export default function PageHeader({ title, buttonText, onButtonClick }) {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
      <h1 className="h2 mb-0 fw-normal">{title}</h1>
      <button className="btn btn-add" onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}
