'use client'

import { Form } from '@/entities'
import { useRegister, useValidations } from '@/features'

export const RegisterForm = () => {
  const onSubmit = useRegister()
  const { handleSubmit, errors, register } = useValidations(true)

  return (
    <Form
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      onSubmit={onSubmit}
      isRegister
    />
  )
}
