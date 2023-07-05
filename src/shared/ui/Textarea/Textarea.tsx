import { DetailsTextareaProps } from '@/shared/types'
import styles from './Textarea.module.scss'
import cn from 'classnames'
import { forwardRef } from 'react'

interface InputProps extends DetailsTextareaProps {
  error?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ error, children, id, title, name, className, ...props }, ref) => {
    return (
      <div className={cn(styles.wrapper, className)}>
        <label htmlFor={id} className={cn(styles.label, className)}>
          {title}
        </label>
        <textarea
          ref={ref}
          name={name}
          id={id}
          className={cn(styles.input, className, {
            [styles.error]: error,
          })}
          {...props}
        />
        {children}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
export { Textarea }
