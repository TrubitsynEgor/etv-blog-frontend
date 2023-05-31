import { Container, Title } from '@/shared'
import { LoginForm } from '@/widgets'

export default function LoginPage() {
  return (
    <Container>
      <Title className="mt-5">Login page</Title>
      <LoginForm />
    </Container>
  )
}
