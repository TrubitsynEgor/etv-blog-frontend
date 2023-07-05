import { DetailsUlProps } from '@/shared'
import { FiEye } from 'react-icons/fi'
import { FaRegCommentDots } from 'react-icons/fa'

interface PostInfoProps extends DetailsUlProps {
  viewsCount: number
  commentsCount: number
  createdAt: string
}

export const PostInfo = ({
  viewsCount,
  commentsCount,
  createdAt,
}: PostInfoProps) => {
  const data = new Date(createdAt)

  return (
    <ul className="flex  gap-x-4 items-center">
      <li className="flex gap-x-2 items-center">
        <FiEye />
        <span>{viewsCount}</span>
      </li>
      <li className="flex gap-x-2 items-center">
        <FaRegCommentDots />
        <span>{commentsCount}</span>
      </li>
      <li>
        <span>{data.toLocaleDateString()}</span>
      </li>
    </ul>
  )
}
