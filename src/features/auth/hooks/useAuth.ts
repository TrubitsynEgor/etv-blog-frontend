import { useAppSelector } from '@/store/hooks'
import { isAuthSelector } from '../reduxSlice'

export const useAuth = () => {
  const isAuth = useAppSelector(isAuthSelector)
  return isAuth
}
