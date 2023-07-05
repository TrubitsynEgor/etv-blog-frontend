'use client'
import { PostContent, PostInfo, PostTags, ViewerInfo } from '@/entities'
import { PostFilter, fetchPosts, useAuth, usePostFilter } from '@/features'
import {
  DetailsUlProps,
  IPosts,
  Loader,
  Title,
  containsInArray,
} from '@/shared'
import { useSelectedValue } from '@/shared/ui/Select/useSelect'
import { useAppDispatch } from '@/store/hooks'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface PostsProps extends DetailsUlProps {}

export const Posts = ({}: PostsProps) => {
  const dispatch = useAppDispatch()
  const { posts } = useSelector((state: RootState) => state.posts)
  const userData = useSelector((state: RootState) => state.auth.data)
  const postsIsLoading = posts.status === 'loading'
  const isAuth = useAuth()
  const { handleIsNew, handleIsPopular, isNew, isPopular } = usePostFilter()
  const { value, setValue } = useSelectedValue()
  const [filteredPosts, setFilteredPosts] = useState<IPosts[]>([])

  useEffect(() => {
    const tags = value.map((el) => el.label)
    const filtered = posts.items.filter((el) => {
      const res = containsInArray(el.tags, tags)
      if (res) return el
    })
    setFilteredPosts(filtered)
  }, [value, posts.items])

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  if (postsIsLoading) {
    return (
      <>
        <Title className="text-center py-5">Please wait 10-15 sec.</Title>
        <Title tag="h2" className="text-center py-5">
          My back-end hosting is free so the first download may take longer than
          usual
        </Title>
        <Loader />
      </>
    )
  }
  return (
    <>
      <div className="flex items-center gap-x-5">
        <Title className="mt-5 mb-5">Projects:</Title>
        <PostFilter
          value={value}
          setValue={setValue}
          isNew={isNew}
          isPopular={isPopular}
          handleIsNew={handleIsNew}
          handleIsPopular={handleIsPopular}
        />
      </div>
      <ul className="flex gap-x-11  gap-y-64 flex-wrap justify-center py-36">
        {(value.length ? filteredPosts : posts.items).map((el) => (
          <li key={el._id} className="text-slate-100 relative w-5/12 ">
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
              >
                <PostInfo
                  commentsCount={5}
                  createdAt={el.createdAt}
                  viewsCount={el.viewsCount}
                />
              </ViewerInfo>
              <PostTags tags={el.tags} />
            </PostContent>
          </li>
        ))}
      </ul>
    </>
  )
}
