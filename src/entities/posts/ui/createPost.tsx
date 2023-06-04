import { DetailsFormProps, Input } from '@/shared'
import { useCallback, useMemo, useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

interface CreatePostProps extends DetailsFormProps {}

export const CreatePost = ({}: CreatePostProps) => {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [text, setText] = useState('')

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
    <form className="flex flex-col gap-y-5">
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
    </form>
  )
}
