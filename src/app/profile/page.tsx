import { Container, Title } from '@/shared'
import { SiCreatereactapp } from 'react-icons/si'
export default function ProfilePage() {
  return (
    <Container>
      <Title className="mt-5">Profile page</Title>
      <Title className="mt-5 text-orange-200 flex gap-5 items-center">
        <SiCreatereactapp className="fill-orange-200 w-14 h-14" />
        Development of this page in progress{' '}
        <SiCreatereactapp className="fill-orange-200 w-14 h-14" />
      </Title>
    </Container>
  )
}
