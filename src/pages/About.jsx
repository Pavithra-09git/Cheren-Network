import aboutNetworkIllustration from '../assets/about-network.svg';

function About() {
  return (
    <section className="about-hero py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="mb-3">
              <span className="hero-badge">
                <i className="fa-solid fa-shield-halved"></i> Trusted IT Partner
              </span>
            </div>
            <h1 className="fw-bold mb-3">About CHERAN NETWORKS</h1>
            <p className="lead">
              We design, deploy and support secure IT infrastructure and networking that keeps your
              business fast, protected and always connected.
            </p>
            <p className="text-muted mb-4">
              From single-office setups to multi-site environments, our team delivers structured
              cabling, Wi-Fi, switching, firewall security, CCTV, servers and end-user computing—backed
              by responsive support and clean documentation.
            </p>

            <div className="row g-3">
              <div className="col-6">
                <div className="about-hero-card rounded-4 p-3 h-100">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="about-feature-icon">
                      <i className="fa-solid fa-network-wired"></i>
                    </span>
                    <span className="fw-semibold">Networking</span>
                  </div>
                  <div className="small text-muted">Switching, Wi‑Fi, routing, structured cabling.</div>
                </div>
              </div>
              <div className="col-6">
                <div className="about-hero-card rounded-4 p-3 h-100">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="about-feature-icon">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <span className="fw-semibold">Security</span>
                  </div>
                  <div className="small text-muted">Firewall, access control, CCTV, hardening.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              src={aboutNetworkIllustration}
              alt="Network infrastructure illustration"
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-lg-4">
            <div className="about-feature p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="about-feature-icon">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
                <h5 className="mb-0 fw-semibold">Quality-first delivery</h5>
              </div>
              <p className="text-muted mb-0 small">
                Clean installs, labeled cabling, stable configurations, and documentation you can
                actually use.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-feature p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="about-feature-icon">
                  <i className="fa-solid fa-gauge-high"></i>
                </span>
                <h5 className="mb-0 fw-semibold">Performance &amp; uptime</h5>
              </div>
              <p className="text-muted mb-0 small">
                Designs centered on reliability—so your teams stay productive without recurring
                network issues.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-feature p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="about-feature-icon">
                  <i className="fa-solid fa-headset"></i>
                </span>
                <h5 className="mb-0 fw-semibold">Responsive support</h5>
              </div>
              <p className="text-muted mb-0 small">
                Fast communication, on-site assistance when needed, and proactive improvements as you
                grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


