'use client'

import { Form } from '@/entities'
import { useLogin, useValidations } from '@/features'

export const LoginForm = () => {
  const onSubmit = useLogin()
  const { handleSubmit, errors, register } = useValidations(false)

  return (
    <Form
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      onSubmit={onSubmit}
    />
  )
}
