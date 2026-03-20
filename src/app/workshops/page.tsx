import type { Metadata } from 'next'
import WorkshopsPage from './WorkshopsPage'

export const metadata: Metadata = {
  title: 'Neurodiversity Workshops | Hands of Sympathy',
  description:
    'Community workshops on neurodiversity delivered by Felix Ndebele, BABCP accredited CBT therapist. Helping families, schools, and organisations understand and support neurodivergent individuals.',
}

export default function Page() {
  return <WorkshopsPage />
}
