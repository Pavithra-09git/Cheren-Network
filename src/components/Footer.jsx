import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">CHERAN NETWORKS</h5>
            <p className="small text-secondary">
              Reliable IT infrastructure, networking, security and end-to-end business support for
              growing organizations.
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Reach Us</h6>
            <ul className="list-unstyled small text-secondary mb-3">
              <li>
                <i className="fa-solid fa-phone me-2 text-primary"></i>
                <a className="footer-link" href="tel:+919677660678">
                  +91 96776 60678
                </a>
              </li>
              <li>
                <i className="fa-solid fa-envelope me-2 text-primary"></i>
                <a className="footer-link" href="mailto:cherannetworks@gmail.com">
                  cherannetworks@gmail.com
                </a>
              </li>
              <li className="mt-2">
                <i className="fa-solid fa-location-dot me-2 text-primary"></i>
                160-A, 6th Street Extension, Gandhipuram, Coimbatore, Tamil Nadu – 641012
              </li>
            </ul>
            <div className="social-links">
              <span className="social-label">Follow us</span>
              <a
                href="https://www.instagram.com/cn_networks"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
          <span>© {new Date().getFullYear()} CHERAN NETWORKS. All rights reserved.</span>
          <span>IT Infrastructure &amp; Networking Solutions</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


