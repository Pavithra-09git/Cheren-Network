import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with API or email service.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <form className="card border-0 shadow-sm p-4 contact-form" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center mt-2">
          <button type="submit" className="btn btn-primary px-4">
            Send Message
          </button>
          {submitted && (
            <span className="text-success small">
              <i className="fa-solid fa-circle-check me-1"></i>
              Message submitted! We will get back to you shortly.
            </span>
          )}
        </div>
      </div>
    </form>
  );
}

export default ContactForm;


