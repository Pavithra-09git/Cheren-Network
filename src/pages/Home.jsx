import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';
import StatsSection from '../components/StatsSection.jsx';
import firewallImg from '../assets/service-firewall.svg';
import computersImg from '../assets/service-computers.svg';
import serversImg from '../assets/service-servers.svg';
import printersImg from '../assets/service-printers.svg';
import securityImg from '../assets/service-security.svg';
import cctvImg from '../assets/service-cctv.svg';
import homeAutomationImg from '../assets/service-home-automation.svg';

function Home() {
  const services = [
    {
      title: 'Firewalls / Routers / WiFi Solutions',
      iconClass: 'fa-solid fa-shield-halved',
      description: 'Secure, optimize and manage your network perimeter with enterprise-class firewalls, routers and WiFi deployments.',
      image: firewallImg
    },
    {
      title: 'Computers & Laptops',
      iconClass: 'fa-solid fa-computer',
      description: 'End-to-end supply, configuration and lifecycle support for business desktops, workstations and laptops.',
      image: computersImg
    },
    {
      title: 'Servers',
      iconClass: 'fa-solid fa-server',
      description: 'Rack, tower and blade servers for core applications, virtualization and storage workloads.',
      image: serversImg
    },
    {
      title: 'Printers',
      iconClass: 'fa-solid fa-print',
      description: 'Business printers, MFPs and print management solutions tailored to your office workflows.',
      image: printersImg
    },
    {
      title: 'Anti-virus',
      iconClass: 'fa-solid fa-shield-virus',
      description: 'Endpoint security and anti-virus solutions that protect users, devices and critical data.',
      image: securityImg
    },
    {
      title: 'CCTV Surveillance',
      iconClass: 'fa-solid fa-video',
      description: 'Comprehensive CCTV coverage with remote monitoring, recording and retention policies.',
      image: cctvImg
    },
    {
      title: 'Biometric Systems',
      iconClass: 'fa-solid fa-fingerprint',
      description: 'Access control and attendance systems integrated with your HR and security policies.',
      image: securityImg
    },
    {
      title: 'Home Automation & Burglar Alarms',
      iconClass: 'fa-solid fa-house-signal',
      description: 'Smart home, intrusion detection and alarm solutions for residences and small offices.',
      image: homeAutomationImg
    },
    {
      title: 'Tally & Billing Software',
      iconClass: 'fa-solid fa-file-invoice-dollar',
      description: 'Implementation and support for Tally, POS and billing solutions to streamline finance operations.',
      image: printersImg
    },
    {
      title: 'Business IT Support',
      iconClass: 'fa-solid fa-headset',
      description: 'Proactive AMC, remote and onsite support to keep your IT infrastructure always available.',
      image: securityImg
    }
  ];

  const trustedBrands = ['Dell', 'Lenovo', 'HP', 'Toshiba', 'Acer', 'Compaq', 'Sony'];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 animate-fade-up">
              <div className="hero-badge mb-3">
                <i className="fa-solid fa-circle-check"></i>
                <span>Trusted IT Infrastructure Partner</span>
              </div>
              <h1 className="hero-title fw-bold mb-3">
                Grow Your Business with{' '}
                <span className="text-primary">CHERAN NETWORKS</span>
              </h1>
              <p className="lead text-light-50 mb-4">
                Reliable IT Infrastructure &amp; Networking Solutions that keep your business
                connected, secure and always-on.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <a href="tel:+919677660678" className="btn btn-primary btn-lg">
                  <i className="fa-solid fa-phone me-2"></i>
                  Call Now
                </a>
                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                  Get a Quote
                </Link>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-3 small text-secondary">
                <span className="d-flex align-items-center">
                  <i className="fa-solid fa-bolt text-warning me-2"></i> Fast deployment
                </span>
                <span className="d-flex align-items-center">
                  <i className="fa-solid fa-lock text-warning me-2"></i> Secure by design
                </span>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center animate-fade-in delay-1">
              <div className="hero-blob position-relative">
                <div className="position-absolute top-50 start-50 translate-middle text-center text-dark">
                  <div className="bg-white bg-opacity-80 rounded-4 p-3 shadow">
                    <p className="small text-uppercase fw-semibold mb-1 text-muted">
                      Coimbatore | Tamil Nadu
                    </p>
                    <h5 className="fw-bold mb-1">IT Infrastructure &amp; Networking</h5>
                    <p className="small mb-0 text-muted">
                      Design, deploy and maintain secure, scalable business networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Brands */}
          <div className="row mt-5 animate-fade-up delay-2">
            <div className="col-12">
              <div className="brand-strip px-3 py-2 d-flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="small text-secondary text-uppercase fw-semibold">
                  Trusted Brands We Work With
                </span>
                <div className="d-flex flex-wrap gap-2 justify-content-end">
                  {trustedBrands.map((brand) => (
                    <span key={brand} className="brand-logo-pill">
                      {/* Dummy logo text - can be replaced with real logos */}
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4 animate-fade-up">
            <div>
              <h2 className="fw-bold mb-2">What We Offer</h2>
              <p className="text-light-50 mb-0">
                End-to-end IT infrastructure, security and networking services for modern
                businesses.
              </p>
            </div>
            <Link to="/services" className="btn btn-outline-primary">
              View All Services
            </Link>
          </div>
          <div className="row">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                iconClass={service.iconClass}
                title={service.title}
                description={service.description}
                image={service.image}
                imageAlt={service.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection />
    </>
  );
}

export default Home;


