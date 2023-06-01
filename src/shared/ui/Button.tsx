import { DetailsBtnProps } from '@/shared/types'
import cn from 'classnames'
import { IoIosArrowForward } from 'react-icons/io'
import { FC } from 'react'

interface ButtonProps extends DetailsBtnProps {
  appearance: 'primary' | 'ghost' | 'icon'
  arrow?: 'right' | 'down' | 'none'
}

const primary = 'bg-orange-200 hover:bg-orange-400 text-slate-950'
const ghost =
  'text-orange-200 border-orange-200 bg-none hover:bg-orange-300 hover:text-slate-950'
const icon = 'bg-none border-none '
const down = 'transition-colors duration-300 ease-in-out rotate-90 '

export const Button: FC<ButtonProps> = ({
  children,
  appearance,
  arrow = 'none',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        ' font-semibold  flex items-center p-2.5 cursor-pointer justify-center transition-colors duration-300 ease-in-out border-none rounded-md text-lg disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-orange-400',
        className,

        {
          [primary]: appearance === 'primary',
          [ghost]: appearance === 'ghost',
          [icon]: appearance === 'icon',
        }
      )}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn('ml-3 ', {
            [down]: arrow === 'down',
          })}
        >
          <IoIosArrowForward />
        </span>
      )}
    </button>
  )
}
