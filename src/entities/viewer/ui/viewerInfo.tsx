import { DetailsDivProps } from '@/shared'
import Image from 'next/image'

interface ViewerInfoProps extends DetailsDivProps {
  avatarUrl: string
  fullName: string
  createdAt: string
  details: boolean
}

export const ViewerInfo = ({
  avatarUrl,
  fullName,
  createdAt,
  children,
  className,
}: ViewerInfoProps) => {
  const createYear = new Date(createdAt).getFullYear()
  return (
    <div className={`flex gap-3 ${className}`}>
      <img
        className="w-12 h-12 object-cover rounded-full"
        src={avatarUrl || '/noavatar.png'}
        alt={fullName}
      />
      <div className="flex flex-col">
        <span className="">{fullName}</span>
        <span className="">{`On site since ${createYear}`}</span>
      </div>
      {children}
    </div>
  )
}
