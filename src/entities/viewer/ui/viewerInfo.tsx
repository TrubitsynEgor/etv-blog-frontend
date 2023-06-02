import { DetailsDivProps } from '@/shared'
import Image from 'next/image'

interface ViewerInfoProps extends DetailsDivProps {
  avatarUrl: string
  fullName: string
  createdAt: string
}

export const ViewerInfo = ({
  avatarUrl,
  fullName,
  createdAt,
}: ViewerInfoProps) => {
  const createYear = new Date(createdAt).getFullYear()
  return (
    <div className="flex gap-x-3">
      <img
        className="w-12 h-12 object-cover"
        src={avatarUrl || '/noavatar.png'}
        alt={fullName}
      />
      <div className="flex flex-col">
        <span className="">{fullName}</span>
        <span className="">{`On site since ${createYear}`}</span>
      </div>
    </div>
  )
}
