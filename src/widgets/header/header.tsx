import { Container, Logo } from '@/shared'

export const Header = () => {
  return (
    <header className="py-3 bg-orange-800">
      <Container className="flex items-center justify-space-between">
        <Logo />
      </Container>
    </header>
  )
}
