import { DetailsDivProps, Paragraph, Title } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface PostContentProps extends DetailsDivProps {
  title: string
  text: string
  imageUrl?: string
  id: string
  details?: boolean
}

export const PostContent = ({
  id,
  title,
  text,
  imageUrl,
  details = false,
  children,
}: PostContentProps) => {
  const [imageIsLoading, setImageLoading] = useState(true)
  const router = useRouter()
  return (
    <div className="">
      <Link
        href={`posts/${id}`}
        className="hover:opacity-70 transition-opacity duration-300"
      >
        <Title className="mt-0 " tag={details ? 'h1' : 'h2'}>
          {title}
        </Title>
      </Link>
      <div
        className={
          details ? 'flex items-center flex-col gap-y-8' : 'flex gap-x-3'
        }
      >
        {imageUrl && (
          <Image
            onClick={() => router.push(`posts/${id}`)}
            width={details ? 1000 : 500}
            height={details ? 350 : 250}
            className={`cursor-pointer max-w-full  object-cover  
            shadow-sm shadow-orange-200 rounded-md hover:opacity-70
            transition-opacity duration-300 
              ${
                imageIsLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              }
              `}
            onLoadingComplete={() => setImageLoading(false)}
            src={imageUrl}
            alt={title}
          />
        )}
        <div
          className={
            details
              ? 'flex gap-x-3 self-start items-center flex-wrap'
              : 'flex flex-col gap-y-5'
          }
        >
          {children}
        </div>
      </div>
      <Paragraph
        numberOfLines={details ? '' : '4'}
        className="overflow-hidden mt-4"
      >
        <ReactMarkdown>{text}</ReactMarkdown>
      </Paragraph>
    </div>
  )
}
