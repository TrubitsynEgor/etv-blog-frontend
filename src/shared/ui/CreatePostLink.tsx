import Link from 'next/link'
import { MdOutlinePostAdd } from 'react-icons/md'

export const CreatePostLink = () => {
  return (
    <div className="flex ">
      <Link
        href={'/posts/create'}
        className="flex items-center gap-x-2 hover:opacity-75 transition-opacity"
      >
        <span className="font-medium">Create post</span>
        <MdOutlinePostAdd className="fill-red-500 w-7 h-8" />
      </Link>
    </div>
  )
}
