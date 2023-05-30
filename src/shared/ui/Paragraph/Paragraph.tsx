import { DetailsDivProps } from '@/shared/types'
import styles from './Paragraph.module.scss'
import cn from 'classnames'
import { FC } from 'react'

interface ParagraphProps extends DetailsDivProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'light' | 'dark'
}

export const Paragraph: FC<ParagraphProps> = ({
  color = 'light',
  size = 'large',
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.dark]: color === 'dark',
      })}
      {...props}
    >
      {children}
    </p>
  )
}
