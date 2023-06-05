import { FormEvent, useEffect, useRef, useState } from 'react'
import { instanceAxios } from '@/shared'
import { ChangeEvent } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useCreateAndEditPost = () => {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const inputFileRef = useRef<HTMLInputElement>(null)

  const { id } = useParams()
  const isEdit = !!id
  const router = useRouter()

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        const formData = new FormData()
        const file = e.target.files[0]
        formData.append('image', file)
        const { data } = await instanceAxios.post('/upload', formData)
        setImageUrl(data.url)
      }
    } catch (err) {
      console.warn(err)
      alert('file download failed')
    }
  }
  const onClickRemoveImage = () => {
    setImageUrl('')
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const fields = {
      title,
      tags,
      text,
      imageUrl,
    }
    const { data } = isEdit
      ? await instanceAxios.patch(`/posts/${id}`, fields)
      : await instanceAxios.post('/posts', fields)

    const _id = isEdit ? id : data._id
    router.push(`/posts/${_id}`)
  }

  useEffect(() => {
    if (isEdit) {
      instanceAxios
        .get(`/posts/${id}`)
        .then(({ data }) => {
          setTitle(data.title)
          setText(data.text)
          setTags(data.tags.join(','))
          setImageUrl(data.imageUrl)
        })
        .catch((err) => console.warn(err))
    }
  }, [])

  return {
    title,
    setTitle,
    tags,
    setTags,
    text,
    setText,
    imageUrl,
    inputFileRef,
    isEdit,
    router,
    handleChangeFile,
    onClickRemoveImage,
    onSubmit,
  }
}
