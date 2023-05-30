import { DetailsDivProps } from '@/shared/types'

export const Container = ({ children, className }: DetailsDivProps) => {
  return (
    <div className={`max-w-7xl	px-4 m-0 mx-auto ${className}`}>{children}</div>
  )
}
