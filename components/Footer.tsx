import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '40px 20px', marginTop: '60px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'left' }}>
        
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', margin: '0 0 12px 0' }}>TicketFinder</h3>
          <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.6', margin: '0' }}>
            Providing smart, real-time live event aggregation and localized notification tools for structural market ticket availability across Europe.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', margin: '0 0 12px 0' }}>Legal & Compliance</h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.6', margin: '0' }}>
            <strong>Affiliate Monetization Disclosure:</strong> TicketFinder is a professional digital publisher platform. This website contains tracking referral links. We may earn a dynamic referral fee/commission payout from qualified ticket checkouts finalized via outbound link redirections to secondary partner networks, including StubHub International. This tracking incurs zero additional expenses for our consumer base.
          </p>
        </div>

      </div>

      <div style={{ maxWidth: '1200px', margin: '30px auto 0 auto', paddingTop: '20px', borderTop: '1px solid #f1f5f9', textAlign: 'center', fontSize: '0.85rem', color: '#94a3b8' }}>
        <p>© 2026 TicketFinder Europe. All rights reserved. Managed in conformity with EU consumer protection guidelines.</p>
      </div>
    </footer>
  );
}