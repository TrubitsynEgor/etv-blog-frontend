'use client'
import { CreatePost } from '@/entities'
import { DetailsDivProps } from '@/shared'

interface PostCreateProps extends DetailsDivProps {}

export const PostCreate = ({}: PostCreateProps) => {
  return (
    <div>
      <CreatePost />
    </div>
  )
}
