'use client'
import { PostContent, PostInfo, PostTags, ViewerInfo } from '@/entities'
import { useAuth } from '@/features'
import { IPosts, Loader, instanceAxios } from '@/shared'
import { RootState } from '@/store/store'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const PostDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState<IPosts>()
  const [postIsLoading, setPostLoading] = useState(true)
  const userData = useSelector((state: RootState) => state.auth.data)
  const isAuth = useAuth()

  const getPostById = async (id: string) => {
    return await instanceAxios.get(`/posts/${id}`)
  }

  useEffect(() => {
    getPostById(id)
      .then((res) => {
        setData(res.data)
        setPostLoading(false)
      })
      .catch((err) => {
        console.warn(err)
      })
  }, [])

  if (postIsLoading) {
    return <Loader />
  }
  if (data) {
    return (
      <div className=" text-slate-100 p-5">
        <PostContent
          isAuth={isAuth}
          isCreator={data.user._id === userData?._id}
          details
          id={data._id}
          title={data.title}
          text={data.text}
          imageUrl={
            data.imageUrl
              ? `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}${data.imageUrl}`
              : ''
          }
        >
          <ViewerInfo
            fullName={data.user.fullName}
            avatarUrl={data.user.avatarUrl}
            createdAt={data.user.createdAt}
          />

          <PostTags tags={data?.tags} />

          <PostInfo
            commentsCount={5}
            createdAt={data.createdAt}
            viewsCount={data.viewsCount}
          />
        </PostContent>
      </div>
    )
  }
  return <h1>Oppps, something go wrong!</h1>
}
