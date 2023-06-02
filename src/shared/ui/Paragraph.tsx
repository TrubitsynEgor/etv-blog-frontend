import { DetailsDivProps } from '@/shared/types'
import cn from 'classnames'
import { FC } from 'react'

interface ParagraphProps extends DetailsDivProps {
  size?: 'small' | 'medium' | 'large'
  numberOfLines?: string
}

export const Paragraph: FC<ParagraphProps> = ({
  size = 'small',
  children,
  className,
  numberOfLines = '',
  ...props
}) => {
  return (
    <p
      style={{ WebkitLineClamp: numberOfLines }}
      className={cn('text-base text-slate-100', className, {
        ['text-lg']: size === 'medium',
        ['text-xl']: size === 'large',
        ['slice-paragraph']: numberOfLines,
      })}
      {...props}
    >
      {children}
    </p>
  )
}
