export default function HomePage() {
  const mockEvents = [
    {
      id: "ev-eu-101",
      title: "Coldplay | Music of the Spheres Tour (London)",
      category: "concerts",
      subCategory: "Alternative Rock",
      date: "2026-08-18T19:00:00Z",
      venue: { name: "Wembley Stadium", city: "London", state: "UK" },
      minPrice: 95,
      currency: "£"
    },
    {
      id: "ev-eu-102",
      title: "Real Madrid vs. FC Barcelona (El Clásico)",
      category: "sports",
      subCategory: "La Liga Football",
      date: "2026-11-12T21:00:00Z",
      venue: { name: "Santiago Bernabéu", city: "Madrid", state: "Spain" },
      minPrice: 140,
      currency: "€"
    },
    {
      id: "ev-eu-103",
      title: "Tomorrowland Festival 2027",
      category: "concerts",
      subCategory: "EDM / Electronic",
      date: "2027-07-20T12:00:00Z",
      venue: { name: "De Schorre", city: "Boom", state: "Belgium" },
      minPrice: 285,
      currency: "€"
    }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f8fafc' }}>
      
      {/* 1. HERO SECTION */}
      <div style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', borderRadius: '24px', color: 'white', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 15px 0' }}>TicketFinder Europe</h1>
        <p style={{ fontSize: '1.25rem', color: '#e0f2fe', maxWidth: '600px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
          Spontaneous live events across Europe. Discover last-minute availability near your location with urgent push updates.
        </p>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255, 255, 255, 0.15)', padding: '12px 24px', borderRadius: '9999px' }}>
          <span>🔔</span>
          <span style={{ fontWeight: '500', fontSize: '0.95rem' }}>Get instant European ticket drop notifications</span>
          <button style={{ background: 'white', color: '#0284c7', border: 'none', padding: '6px 16px', borderRadius: '9999px', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer' }}>
            Activate Alerts
          </button>
        </div>
      </div>

      {/* 2. OPERATIONAL METHODOLOGY */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', backgroundColor: 'white', padding: '40px', borderRadius: '20px', border: '1px solid #e2e8f0', marginBottom: '50px' }}>
        <div>
          <h2 style={{ color: '#1e293b', fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px' }}>Our Mission</h2>
          <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '0.95rem', margin: '0' }}>
            TicketFinder is an independent digital media search platform mapping out real-time inventory adjustments across regional secondary markets. We help active travelers and local fans find last-minute premium placement for high-demand fixtures.
          </p>
        </div>
        <div>
          <h2 style={{ color: '#1e293b', fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px' }}>Geo-Targeted Delivery & Push Alerts</h2>
          <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '0.95rem', margin: '0' }}>
            By utilizing standardized browser geolocation parameters, TicketFinder isolates nearby events to minimize travel latency. Our core strategy relies on programmatic user notifications, distributing automated device alerts the moment inventory price floors decline.
          </p>
        </div>
      </section>
      
      {/* 3. LAST MINUTE LIVE FEEDS */}
      <h2 style={{ marginTop: '30px', fontSize: '1.8rem', fontWeight: '700', color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
        Last-Minute European Availability
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginTop: '24px' }}>
        {mockEvents.map((event) => (
          <div key={event.id} style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '16px', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', backgroundColor: '#f0fdf4', color: '#16a34a', fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '9999px', marginBottom: '12px' }}>
                ⚡ PROXIMITY ALERT
              </div>
              <h3 style={{ margin: '0 0 8px 0', color: '#1e293b', fontSize: '1.25rem', fontWeight: '700' }}>{event.title}</h3>
              <p style={{ margin: '4px 0', color: '#64748b', fontSize: '0.9rem' }}>📍 {event.venue.name} — {event.venue.city}, {event.venue.state}</p>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block' }}>Estimated From</span>
                <p style={{ fontWeight: '800', color: '#0f172a', fontSize: '1.35rem', margin: '0' }}>{event.currency}{event.minPrice}</p>
              </div>
              <button style={{ backgroundColor: '#0f172a', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '10px', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer' }}>
                Check Inventory
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
