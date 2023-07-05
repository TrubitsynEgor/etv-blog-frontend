import { Container, Title } from '@/shared'
import { Contacts } from '@/widgets'

export default function ContactsPage() {
  return (
    <Container>
      <Title className="mt-5">You can contact with me:</Title>
      <Contacts />
    </Container>
  )
}
