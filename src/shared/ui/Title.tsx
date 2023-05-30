import { DetailsHeadingProps } from '@/shared/types'
import cn from 'classnames'
import { FC } from 'react'

interface TitleProps extends DetailsHeadingProps {
  tag?: 'h1' | 'h2' | 'h3'
}

export const Title: FC<TitleProps> = ({ children, tag, className }) => {
  const baseStyles = 'm-0 font-bold text-slate-100'

  if (tag === 'h2') {
    return <h2 className={cn('text-3xl', className, baseStyles)}>{children}</h2>
  }

  if (tag === 'h3') {
    return <h3 className={cn('text-2xl', className, baseStyles)}>{children}</h3>
  }

  return <h1 className={cn('text-4xl', className, baseStyles)}>{children}</h1>
}
