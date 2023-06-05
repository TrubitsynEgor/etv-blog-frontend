'use client'
import { Button, DetailsDivProps } from '@/shared'
import { useAppDispatch } from '@/store/hooks'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { fetchRemovePost } from '../reduxSlice'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'

interface PostPanelProps extends DetailsDivProps {
  id: string
}
export const PostPanel = ({ id }: PostPanelProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const removePost = () => {
    dispatch(fetchRemovePost(id))
    router.push('/posts')
  }
  return (
    <div className="flex items-center gap-x-3">
      <Link href={`posts/${id}/edit`}>
        <FaEdit
          className={`fill-teal-500 w-8 h-8 hover:fill-teal-200 t
				transition-colors duration-300`}
        />
      </Link>
      <Button appearance="icon" onClick={removePost}>
        <RiDeleteBinLine
          className={`fill-red-500 w-8 h-8 hover:fill-red-300 t
				transition-colors duration-300`}
        />
      </Button>
    </div>
  )
}
