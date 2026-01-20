import { Link } from 'react-router-dom';

function ServiceCard({ title, description, ctaLabel = 'Enquire Now', image, imageAlt }) {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm service-card border-0">
        <div className="card-body d-flex flex-column">
          {image && (
            <div className="mb-3">
              <img
                src={image}
                alt={imageAlt || title}
                className="service-card-image"
                loading="lazy"
              />
            </div>
          )}
          <h5 className="card-title fw-semibold mb-2">{title}</h5>
          <p className="card-text text-muted small flex-grow-1">{description}</p>
          <Link to="/contact#enquiry-form" className="btn btn-outline-primary mt-2 align-self-start">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;


