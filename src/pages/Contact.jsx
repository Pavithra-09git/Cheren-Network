import ContactForm from '../components/ContactForm.jsx';

function Contact() {
  const phoneNumberDisplay = '+91 96776 60678';
  const phoneNumberTel = '+919677660678';
  const email = 'cherannetworks@gmail.com';
  const mapsLink =
    'https://www.google.com/maps/search/?api=1&query=160-A%2C%206th%20Street%20Extension%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012';
  const whatsappLink = `https://wa.me/${phoneNumberTel.replace('+', '')}?text=${encodeURIComponent(
    'Hi CHERAN NETWORKS, I would like to know more about your IT Infrastructure & Networking services.'
  )}`;

  return (
    <section className="py-5 contact-page">
      <div className="container">
        <div className="row mb-4 align-items-end g-3 animate-fade-up">
          <div className="col-lg-7">
            <div className="hero-badge mb-3">
              <i className="fa-solid fa-headset"></i>
              <span>Fast response • Clear guidance</span>
            </div>
            <h1 className="fw-bold mb-2">Contact Us</h1>
            <p className="text-muted mb-0">
              Share your requirements and our team will get in touch to design the right IT
              infrastructure and networking solution for your business.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-2">
              <a href={`tel:${phoneNumberTel}`} className="btn btn-primary">
                <i className="fa-solid fa-phone me-2"></i>
                Call Now
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                <i className="fa-brands fa-whatsapp me-2"></i>
                WhatsApp
              </a>
              <a href={`mailto:${email}`} className="btn btn-outline-primary">
                <i className="fa-solid fa-envelope me-2"></i>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-7 animate-fade-up delay-1" id="enquiry-form">
            <ContactForm />
          </div>
          <div className="col-lg-5 animate-fade-up delay-2">
            <div className="card border-0 shadow-sm mb-4 contact-info-card">
              <div className="card-body">
                <h5 className="fw-semibold mb-3">Business Contact Info</h5>
                <ul className="list-unstyled small mb-3">
                  <li className="mb-2">
                    <i className="fa-solid fa-phone text-primary me-2"></i>
                    <a className="contact-link" href={`tel:${phoneNumberTel}`}>
                      {phoneNumberDisplay}
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-envelope text-primary me-2"></i>
                    <a className="contact-link" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="fa-solid fa-location-dot text-primary me-2 mt-1"></i>
                    <span>
                      160-A, 6th Street Extension,
                      <br />
                      Gandhipuram, Coimbatore,
                      <br />
                      Tamil Nadu – 641012
                      <div className="mt-2">
                        <a className="contact-link" href={mapsLink} target="_blank" rel="noreferrer">
                          Get Directions <i className="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                        </a>
                      </div>
                    </span>
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

            <div className="map-embed">
              <iframe
                title="CHERAN NETWORKS Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.996217359512!2d76.963!3d11.017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b7d62c1b8f%3A0x0!2sGandhipuram%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


