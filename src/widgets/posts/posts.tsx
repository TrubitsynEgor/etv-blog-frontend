'use client'
import { PostContent, PostInfo, PostTags, ViewerInfo } from '@/entities'
import { PostFilter, fetchPosts, useAuth, usePostFilter } from '@/features'
import { DetailsUlProps, Loader, Title } from '@/shared'
import { useAppDispatch } from '@/store/hooks'
import { RootState } from '@/store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

interface PostsProps extends DetailsUlProps {}

export const Posts = ({}: PostsProps) => {
  const dispatch = useAppDispatch()
  const { posts } = useSelector((state: RootState) => state.posts)
  const userData = useSelector((state: RootState) => state.auth.data)
  const postsIsLoading = posts.status === 'loading'
  const isAuth = useAuth()
  const { handleIsNew, handleIsPopular, isNew, isPopular } = usePostFilter()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  if (postsIsLoading) {
    return <Loader />
  }
  return (
    <>
      <div className="flex items-center gap-x-5">
        <Title className="mt-5 mb-5">Posts:</Title>
        <PostFilter
          isNew={isNew}
          isPopular={isPopular}
          handleIsNew={handleIsNew}
          handleIsPopular={handleIsPopular}
        />
      </div>
      <ul className="flex flex-col gap-y-5">
        {posts.items.map((el) => (
          <li
            key={el._id}
            className="text-slate-100 p-5 border-orange-200 border"
          >
            <PostContent
              id={el._id}
              title={el.title}
              text={el.text}
              isAuth={isAuth}
              isCreator={userData?._id === el.user._id}
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
    </>
  )
}
