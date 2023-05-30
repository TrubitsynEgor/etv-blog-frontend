import { DetailsHeadingProps } from '@/shared/types'
import styles from './Title.module.scss'
import cn from 'classnames'
import { FC } from 'react'

interface TitleProps extends DetailsHeadingProps {
  tag?: 'h1' | 'h2' | 'h3'
}

export const Title: FC<TitleProps> = ({
  children,
  tag,
  className,
  ...props
}) => {
  if (tag === 'h2') {
    return (
      <h2 className={cn(styles.h2, className, styles.title)} {...props}>
        {children}
      </h2>
    )
  }

  if (tag === 'h3') {
    return (
      <h3 className={cn(styles.h3, className, styles.title)} {...props}>
        {children}
      </h3>
    )
  }

  return (
    <h1 className={cn(styles.h1, className, styles.title)} {...props}>
      {children}
    </h1>
  )
}
