'use client'
import { PostContent, PostInfo, PostTags, ViewerInfo } from '@/entities'
import { fetchPosts } from '@/features'
import { DetailsUlProps, Loader } from '@/shared'
import { useAppDispatch } from '@/store/hooks'
import { RootState } from '@/store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

interface PostsProps extends DetailsUlProps {}

export const Posts = ({}: PostsProps) => {
  const dispatch = useAppDispatch()
  const { posts } = useSelector((state: RootState) => state.posts)
  const postsIsLoading = posts.status === 'loading'

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  if (postsIsLoading) {
    return <Loader />
  }
  return (
    <ul className="text-slate-100 p-5 border-orange-200 border">
      {posts.items.map((el) => (
        <li key={el._id}>
          <PostContent
            id={el._id}
            title={el.title}
            text={el.text}
            imageUrl={
              el.imageUrl
                ? `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}${el.imageUrl}`
                : ''
            }
          >
            <ViewerInfo
              fullName={el.user.fullName}
              avatarUrl={el.user.avatarUrl}
              createdAt={el.user.createdAt}
            />

            <PostTags tags={el.tags} />

            <PostInfo
              commentsCount={5}
              createdAt={el.createdAt}
              viewsCount={el.viewsCount}
            />
          </PostContent>
        </li>
      ))}
    </ul>
  )
}
