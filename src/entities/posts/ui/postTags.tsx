import { DetailsUlProps } from '@/shared'

interface PostTagsProps extends DetailsUlProps {
  tags: string[]
}

export const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <ul className="flex gap-2 flex-wrap ">
      {tags
        .filter((el) => el.trim().length > 0)
        .map((tag, idx) => (
          <li
            key={idx}
            className="font-medium bg-orange-200 px-2 py-1 rounded-lg text-slate-900"
          >
            {tag}
          </li>
        ))}
    </ul>
  )
}
