import { Container, Title } from '@/shared'
import { LoginForm } from '@/widgets'

export default function LoginPage() {
  return (
    <Container>
      <Title className="text-center py-5">Login</Title>
      <LoginForm />
    </Container>
  )
}
