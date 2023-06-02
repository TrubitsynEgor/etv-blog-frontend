import { DetailsDivProps, Paragraph, Title } from '@/shared'
import Image from 'next/image'

interface PostContentProps extends DetailsDivProps {
  title: string
  text: string
  imageUrl?: string
}

export const PostContent = ({
  title,
  text,
  imageUrl,
  children,
}: PostContentProps) => {
  return (
    <div className="">
      <Title className="mt-0" tag="h2">
        {title}
      </Title>

      <div className="flex  gap-x-8">
        {imageUrl && (
          <img
            className="max-w-full h-80 object-cover shadow-sm shadow-current rounded-md"
            src={imageUrl}
            alt={title}
          />
        )}
        <div className="flex flex-col gap-y-3">
          {' '}
          {children}
          <Paragraph numberOfLines="8" className="overflow-hidden ">
            {text}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
