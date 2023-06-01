import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(4),
  })
  .required()
export type FormData = yup.InferType<typeof schema>

const registerSchema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(4),
    fullName: yup.string().required().min(2),
    avatarUrl: yup.string().url(),
  })
  .required()
export type RegisterFormData = yup.InferType<typeof registerSchema>

export const useValidations = (isRegister: boolean) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData | RegisterFormData>({
    resolver: isRegister ? yupResolver(registerSchema) : yupResolver(schema),
    mode: 'all',
  })

  return {
    handleSubmit,
    register,
    errors,
  }
}
