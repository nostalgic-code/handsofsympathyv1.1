import Link from 'next/link'

const SERVICES = ['CBT Therapy', 'Autism Assessments', 'Family Workshops', '1:1 Sessions', 'Psychometric Testing']
const LEGAL    = ['Privacy Policy', 'GDPR Statement', 'Complaints Procedure', 'Referrals']

function FooterLogo() {
  return (
    <svg viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
      <path 
        d="M8 28c-1.5-2-2-4-1.5-6 .5-2 2-3.5 4-4.5 1-.5 2.2-.8 3.5-.5 1 .2 2 .8 2.8 1.5.5.5 1 1.2 1.2 2 .2-.8.7-1.5 1.2-2 .8-.7 1.8-1.3 2.8-1.5 1.3-.3 2.5 0 3.5.5 2 1 3.5 2.5 4 4.5.5 2 0 4-1.5 6"
        fill="none"
        stroke="var(--cream)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M20 24c0 0-4-3-4-5.5 0-1.5 1-2.5 2.2-2.5 1 0 1.5.5 1.8 1 .3-.5.8-1 1.8-1 1.2 0 2.2 1 2.2 2.5 0 2.5-4 5.5-4 5.5z"
        fill="var(--cream)"
        strokeWidth="0"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <FooterLogo />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', color: 'var(--cream-light)' }}>
              Hands of Sympathy
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'rgba(232,216,197,0.38)', lineHeight: 1.8, maxWidth: '20rem', marginBottom: '2rem' }}>
            A dedicated mental health service delivering compassionate, evidence-based interventions in Birmingham and across the NHS.
          </p>
          <div className="flex gap-2 flex-wrap">
            {['BABCP', 'NMC', 'NHS', 'CAMHS'].map(b => (
              <span key={b} className="footer-badge">{b}</span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(232,216,197,0.25)', marginBottom: '1.5rem' }}>
            Services
          </p>
          <ul className="space-y-3">
            {SERVICES.map(s => (
              <li key={s}>
                <Link href="/" style={{ fontSize: '0.82rem', color: 'rgba(232,216,197,0.42)', textDecoration: 'none', transition: 'color .3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,216,197,0.42)')}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(232,216,197,0.25)', marginBottom: '1.5rem' }}>
            Information
          </p>
          <ul className="space-y-3">
            {LEGAL.map(s => (
              <li key={s}>
                <a href="#" style={{ fontSize: '0.82rem', color: 'rgba(232,216,197,0.42)', textDecoration: 'none', transition: 'color .3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,216,197,0.42)')}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
        style={{ borderTop: '1px solid rgba(232,216,197,0.07)' }}
      >
        <p style={{ fontSize: '0.65rem', color: 'rgba(232,216,197,0.2)' }}>
          © {new Date().getFullYear()} Hands of Sympathy. Birmingham, UK. All rights reserved.
        </p>
        <p style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '0.88rem', color: 'rgba(232,216,197,0.15)' }}>
          "A shared experience calls for a shared solution."
        </p>
      </div>
    </footer>
  )
}
