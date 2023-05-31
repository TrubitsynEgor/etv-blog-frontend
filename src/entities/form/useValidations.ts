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

export const useValidations = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'test@test.tu',
      password: 'qwer1234',
    },
    mode: 'all',
  })

  return {
    handleSubmit,
    register,
    errors,
  }
}
