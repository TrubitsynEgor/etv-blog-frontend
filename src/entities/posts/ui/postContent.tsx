import { PostPanel, isAuthSelector } from '@/features'
import { DetailsDivProps, Paragraph, Title } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useSelector } from 'react-redux'

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
  const isAuth = useSelector(isAuthSelector)
  const router = useRouter()
  return (
    <div className="">
      <div className="flex justify-between items-center gap-3 mb-10">
        <Link
          href={`posts/${id}`}
          className={
            !details
              ? 'hover:opacity-70 transition-opacity duration-300'
              : 'cursor-text'
          }
        >
          <Title className="mt-0 mb-0" tag={details ? 'h1' : 'h2'}>
            {title}
          </Title>
        </Link>
        {isAuth && <PostPanel id={id} />}
      </div>
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
            className={` max-w-full  object-cover  
            shadow-sm shadow-orange-200 rounded-md 
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
              ? 'flex gap-x-3 self-start items-center flex-wrap'
              : 'flex flex-col gap-y-5'
          }
        >
          {children}
          {!details && (
            <>
              <Paragraph
                numberOfLines={details ? '' : '6'}
                className="overflow-hidden mt-4"
              >
                <ReactMarkdown>{text}</ReactMarkdown>
              </Paragraph>
            </>
          )}
        </div>
      </div>
      {details && (
        <Paragraph className="overflow-hidden mt-4">
          <ReactMarkdown>{text}</ReactMarkdown>
        </Paragraph>
      )}
    </div>
  )
}
