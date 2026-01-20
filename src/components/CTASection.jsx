import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="py-5 cta-section text-center text-lg-start">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-2 text-white">We Support Your Business</h2>
            <p className="mb-0 text-white-50">
              From on-premise networks to cloud infrastructure, CHERAN NETWORKS keeps your systems
              secure, available and ready for growth.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
              <a href="tel:+919677660678" className="btn btn-light">
                <i className="fa-solid fa-phone me-2"></i>
                Call Now
              </a>
              <Link to="/contact" className="btn btn-outline-light">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;


