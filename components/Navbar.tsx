import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '15px 30px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* לוגו המותג החדש */}
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: '#4f46e5', textDecoration: 'none' }}>
          TicketFinder
        </Link>

        {/* תפריט ניווט קל */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/events?category=concerts" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Concerts</Link>
          <Link href="/events?category=sports" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Sports</Link>
          <Link href="/events?category=theater" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Theater</Link>
        </div>

      </div>
    </nav>
  );
}