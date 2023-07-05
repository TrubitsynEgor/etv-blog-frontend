import { PostPanel } from '@/features'
import { DetailsDivProps, Paragraph, Title } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface PostContentProps extends DetailsDivProps {
  title: string
  text: string
  imageUrl?: string
  id: string
  details?: boolean
  isAuth?: boolean
  isCreator?: boolean
}

export const PostContent = ({
  id,
  title,
  text,
  imageUrl,
  details = false,
  isAuth,
  isCreator,
  children,
}: PostContentProps) => {
  const [imageIsLoading, setImageLoading] = useState(true)

  const router = useRouter()
  return (
    <div className="">
      <div className="flex justify-between items-center gap-3 mb-5 relative">
        <Link href={`posts/${id}`} className={!details ? '' : 'cursor-text'}>
          <Title
            tag={details ? 'h1' : 'h2'}
            className={
              !details
                ? 'absolute left-3 top-8 z-40 bg-orange-200 p-2 rounded-xl text-slate-800 text-xl'
                : ''
            }
          >
            {title}
          </Title>
        </Link>
        {isAuth && isCreator && <PostPanel id={id} />}
      </div>
      <div className={'flex gap-x-10 items-center '}>
        {imageUrl && (
          <Image
            onClick={() => router.push(`posts/${id}`)}
            width={400}
            height={200}
            priority
            className={`  
              shadow-sm shadow-orange-200 rounded-md  w-auto h-auto object-cover
              ${
                !details &&
                'cursor-pointer hover:opacity-70 transition-opacity duration-300'
              }
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
              ? 'flex flex-col gap-y-5'
              : 'flex flex-col gap-y-5 absolute left-3 -top-36'
          }
        >
          {children}
        </div>
      </div>
      {details && (
        <ReactMarkdown className="prose bg-orange-200 p-4 rounded-xl mx-auto mt-8">
          {text}
        </ReactMarkdown>
      )}
    </div>
  )
}
