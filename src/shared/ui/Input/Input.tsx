import { DetailsInputProps } from '@/shared/types'
import styles from './Input.module.scss'
import cn from 'classnames'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends DetailsInputProps {
  error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, children, id, title, name = '', className, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <label htmlFor={id} className={cn(styles.label, className)}>
          {title}
        </label>
        <input
          ref={ref}
          name={name}
          id={id}
          className={cn(styles.input, className, { [styles.error]: error })}
          {...props}
        />
        {children}
      </div>
    )
  }
)
