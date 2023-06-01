import { Container, Title } from '@/shared'
import { RegisterForm } from '@/widgets'

export default function RegisterPage() {
  return (
    <Container>
      <Title className="mt-5">Register page</Title>
      <RegisterForm />
    </Container>
  )
}
