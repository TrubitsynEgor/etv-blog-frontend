import { DetailsDivProps } from '@/shared/types'
import styles from './Popup.module.scss'
import cn from 'classnames'
import { Dispatch, FC, SetStateAction } from 'react'
import { Portal } from '../Portal'
import { AiOutlineClose } from 'react-icons/ai'
import { useAuth } from '@/features'

interface PopupProps extends DetailsDivProps {
  setVisible: Dispatch<SetStateAction<boolean>>
  visible: boolean
}

export const Popup: FC<PopupProps> = ({
  visible,
  setVisible,
  children,
  className,
  ...props
}) => {
  const isAuth = useAuth()

  return (
    <Portal>
      <div
        className={cn(styles.popup, className, {
          [styles.visible]: visible && !isAuth,
        })}
        onClick={() => setVisible(false)}
        {...props}
      >
        <div
          className={cn(styles.content, {
            [styles.visible]: visible && !isAuth,
          })}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setVisible(false)}
            aria-label="close modal"
            className={styles.close}
          >
            {' '}
            <AiOutlineClose />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  )
}
