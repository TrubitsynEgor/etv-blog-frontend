import { Button, DetailsFormProps, Input, instanceAxios } from '@/shared'
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import dynamic from 'next/dynamic'
import 'easymde/dist/easymde.min.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
})

interface CreatePostProps extends DetailsFormProps {}

type postData = {
  title: string
  tags: string
}

export const CreatePost = ({}: CreatePostProps) => {
  const { id } = useParams()
  const isEdit = !!id
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const inputFileRef = useRef<HTMLInputElement>(null)

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

  const onChange = useCallback((value: string) => {
    setText(value)
  }, [])

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Write your text here...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: new Date().toString(),
      },
    }),
    []
  )

  return (
    <div className="py-10">
      <div className="mb-5">
        {!imageUrl ? (
          <>
            ?{' '}
            <Button
              onClick={() => inputFileRef.current?.click()}
              appearance="primary"
            >
              Download previews
            </Button>
            <input
              onChange={handleChangeFile}
              ref={inputFileRef}
              type="file"
              hidden
            />
            ?
          </>
        ) : (
          <Button appearance="ghost" onClick={onClickRemoveImage}>
            Remove
          </Button>
        )}
      </div>
      {imageUrl && (
        <Image
          width={1000}
          height={300}
          className="max-w-full mb-5 rounded-xl"
          src={`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}${imageUrl}`}
          alt="Uploaded"
        />
      )}
      <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
        <Input
          className="text-slate-100"
          type="text"
          placeholder="Enter post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          className="text-slate-100"
          type="text"
          placeholder="Enter the tags separated by commas < , > "
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <SimpleMDE
          className="bg-orange-200 rounded-lg"
          value={text}
          onChange={onChange}
          options={options}
        />

        <div className="flex gap-x-3">
          <Button appearance="primary">{isEdit ? 'Edit' : 'Create'}</Button>
          <Button
            onClick={() => router.push('/posts')}
            type="button"
            appearance="ghost"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
