export default function AlertBanner({ message, type = "info", onClose }) {
  return (
    <div className={`alert alert-${type} alert-dismissible`} role="alert">
      {message}
      <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
    </div>
  );
}
