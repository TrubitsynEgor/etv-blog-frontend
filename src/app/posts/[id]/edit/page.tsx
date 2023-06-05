import { Container, Title } from '@/shared'
import { PostCreate } from '@/widgets'

export default function EditPost() {
  return (
    <Container>
      <Title className="mt-5">Edit Posts</Title>
      <PostCreate />
    </Container>
  )
}
