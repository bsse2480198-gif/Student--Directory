export default function Footer({ links, contact, copyright }) {
  return (
    <footer className="bg-dark text-white mt-4 pt-4">
      <div className="container">
        <div className="row px-3">
          <div className="col-md-6 mb-3">
            <h5 className="fw-normal">Links</h5>
            <ul className="list-unstyled">
              {links.map((l) => (
                <li key={l}><a href="#" className="text-white text-decoration-none">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="fw-normal">Contact Info</h5>
            <ul className="list-unstyled">
              {contact.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center pb-3 mb-0">{copyright}</p>
      </div>
    </footer>
  );
}
