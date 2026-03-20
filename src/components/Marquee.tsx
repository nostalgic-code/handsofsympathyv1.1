const ITEMS = [
  'Compassionate Care', '✦', 'CBT Therapy', '✦', 'Autism Assessments', '✦',
  'Family Workshops',   '✦', 'PTSD Treatment', '✦', 'Evidence-Based', '✦',
  'BABCP Accredited',   '✦', '14+ Years',      '✦', 'Psychometric Testing', '✦',
]

export default function Marquee({ dark = false }: { dark?: boolean }) {
  const repeated = [...ITEMS, ...ITEMS]
  return (
    <div className={`marquee-band${dark ? ' dark' : ''}`}>
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`mq-item${item === '✦' ? ' gem' : ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
