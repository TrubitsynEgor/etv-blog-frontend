import { Container, Title } from '@/shared'
import { RegisterForm } from '@/widgets'

export default function RegisterPage() {
  return (
    <Container>
      <Title className="text-center py-5">Registration</Title>
      <RegisterForm />
    </Container>
  )
}
