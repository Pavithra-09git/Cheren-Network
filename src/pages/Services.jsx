import ServiceCard from '../components/ServiceCard.jsx';
import firewallImg from '../assets/service-firewall.svg';
import computersImg from '../assets/service-computers.svg';
import serversImg from '../assets/service-servers.svg';
import cctvImg from '../assets/service-cctv.svg';
import homeAutomationImg from '../assets/service-home-automation.svg';

function Services() {
  const detailedServices = [
    {
      title: 'EPABX / IPPBX Solutions',
      iconClass: 'fa-solid fa-phone-volume',
      description:
        'Scalable EPABX and IPPBX systems with call routing, IVR, conferencing and remote extension support for branch connectivity.',
      image: firewallImg
    },
    {
      title: 'Wi-Fi & RF Solutions',
      iconClass: 'fa-solid fa-wifi',
      description:
        'Indoor and outdoor Wi-Fi and RF design for offices, campuses, warehouses and hospitality environments.',
      image: firewallImg
    },
    {
      title: 'Server, Desktop & Computer Solutions',
      iconClass: 'fa-solid fa-computer',
      description:
        'Sizing, supply, deployment and maintenance of business servers, desktops and end-user computing.',
      image: computersImg
    },
    {
      title: 'CCTV Surveillance',
      iconClass: 'fa-solid fa-video',
      description:
        'IP and analog CCTV, NVR/DVR solutions and monitoring for offices, factories, institutions and residential complexes.',
      image: cctvImg
    },
    {
      title: 'Networking & Cabling Solutions',
      iconClass: 'fa-solid fa-network-wired',
      description:
        'Structured cabling, switching, routing and backbone networks designed for performance and reliability.',
      image: firewallImg
    },
    {
      title: 'Data Center & Rack Solutions',
      iconClass: 'fa-solid fa-database',
      description:
        'Server racks, cooling, power, cable management and security for robust on-premise data centers.',
      image: serversImg
    },
    {
      title: 'Projectors & Smart Board Classroom Solutions',
      iconClass: 'fa-solid fa-chalkboard',
      description:
        'Interactive projectors, smart boards and audio-visual solutions for classrooms, training rooms and board rooms.',
      image: serversImg
    },
    {
      title: 'Home Automation',
      iconClass: 'fa-solid fa-house-signal',
      description:
        'Lighting, surveillance, access control and automation integrated into unified, easy-to-manage solutions.',
      image: homeAutomationImg
    }
  ];

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-3">Our Services</h1>
              <p className="text-light-50 mb-0">
                CHERAN NETWORKS designs, implements and supports complete IT infrastructure stacks
                for businesses of all sizes. From structured cabling to secure connectivity and
                collaboration, our solutions are built to be resilient and future-ready.
              </p>
            </div>
          </div>

          <div className="row">
            {detailedServices.map((service) => (
              <ServiceCard
                key={service.title}
                iconClass={service.iconClass}
                title={service.title}
                description={service.description}
                image={service.image}
                imageAlt={service.title}
                ctaLabel="Enquire Now"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;


