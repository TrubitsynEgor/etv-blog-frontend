import { Container, Title } from '@/shared'
import { RegisterForm } from '@/widgets'

export default function RegisterPage() {
  return (
    <Container>
      <Title className="text-center">Registration</Title>
      <RegisterForm />
    </Container>
  )
}
