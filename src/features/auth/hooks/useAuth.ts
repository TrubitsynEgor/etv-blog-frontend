import { isAuthSelector } from '../reduxSlice'
import { useSelector } from 'react-redux'

export const useAuth = () => {
  const isAuth = useSelector(isAuthSelector)
  return isAuth
}
