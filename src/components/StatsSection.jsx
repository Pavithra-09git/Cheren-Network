function StatsSection() {
  const stats = [
    {
      label: 'Cameras Installed',
      value: '1500+',
      icon: 'fa-solid fa-video'
    },
    {
      label: 'Wireless AP Installations',
      value: '250+',
      icon: 'fa-solid fa-wifi'
    },
    {
      label: 'Network Nodes Setup',
      value: '7500+',
      icon: 'fa-solid fa-network-wired'
    }
  ];

  return (
    <section className="py-5 stats-section animate-fade-up">
      <div className="container">
        <div className="row g-4 justify-content-center text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="col-10 col-md-4">
              <div className="stat-card p-4 h-100 rounded-4">
                <div className="stat-icon mb-3">
                  <i className={stat.icon}></i>
                </div>
                <h3 className="stat-value fw-bold mb-1">{stat.value}</h3>
                <p className="stat-label mb-0 text-uppercase small text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;


