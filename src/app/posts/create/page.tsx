import { Container, Title } from '@/shared'
import { PostCreate } from '@/widgets'

export default function CreatePostsPage() {
  return (
    <Container>
      <Title className="mt-5">Create Posts</Title>
      <PostCreate />
    </Container>
  )
}
