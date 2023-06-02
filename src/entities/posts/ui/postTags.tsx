import { DetailsUlProps } from '@/shared'
import Link from 'next/link'

interface PostTagsProps extends DetailsUlProps {
  tags: string[]
}

export const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <ul className="flex gap-x-4">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            className=" bg-orange-200 px-2 py-1 rounded-lg text-slate-900"
            href={`/tag/${tag}`}
          >
            #{tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}
