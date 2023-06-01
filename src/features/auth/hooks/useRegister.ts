import { useAppDispatch } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { fetchRegister } from '../reduxSlice'
import { writeTokenOnSubmit } from '../model'
import { RegisterFormData } from './useValidations'

export const useRegister = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = async (data: RegisterFormData) => {
    const viewerData = await dispatch(fetchRegister(data))
    writeTokenOnSubmit(viewerData)
    router.push('/')
  }

  return onSubmit
}
