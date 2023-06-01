import { useAppDispatch } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { fetchAuth } from '../reduxSlice'
import { writeTokenOnSubmit } from '../model'
import { FormData } from './useValidations'

export const useLogin = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    const viewerData = await dispatch(fetchAuth(data))
    writeTokenOnSubmit(viewerData)
    router.push('/')
  }

  return onSubmit
}
