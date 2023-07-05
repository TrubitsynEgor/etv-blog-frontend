import { Button, DetailsFormProps, Input, Select } from '@/shared'
import { useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'

import Image from 'next/image'
import { useCreateAndEditPost } from '@/features'
import { selectOptions } from '@/features/posts/consts'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
})
import 'easymde/dist/easymde.min.css'

interface CreatePostProps extends DetailsFormProps {}

export const CreatePost = ({}: CreatePostProps) => {
  const {
    handleChangeFile,
    imageUrl,
    isEdit,
    inputFileRef,
    onClickRemoveImage,
    onSubmit,
    router,
    setTags,
    setText,
    setTitle,
    tags,
    text,
    title,
  } = useCreateAndEditPost()

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
    <div className="pb-10">
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

        <Select
          multiple
          options={selectOptions}
          value={tags}
          onChange={(o) => setTags(o)}
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
