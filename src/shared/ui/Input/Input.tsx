import { DetailsInputProps } from '@/shared/types'
import styles from './Input.module.scss'
import cn from 'classnames'
import { forwardRef } from 'react'

interface InputProps extends DetailsInputProps {
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, children, id, title, name, className, ...props }, ref) => {
    return (
      <div className={cn(styles.wrapper, className)}>
        <label htmlFor={id} className={cn(styles.label, className)}>
          {title}
        </label>
        <input
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

Input.displayName = 'Input'
export { Input }
