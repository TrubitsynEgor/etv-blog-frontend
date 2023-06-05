import { Container, Title } from '@/shared'
import { Posts } from '@/widgets'

export default function PostsPage() {
  return (
    <Container>
      <Title className="mt-5 mb-5">Posts:</Title>
      <Posts />
    </Container>
  )
}
