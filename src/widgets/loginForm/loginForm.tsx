'use client'

import { Form } from '@/entities'
import { useLogin, useValidations } from '@/features'
import { AuthHandler } from '@/shared'

export const LoginForm = () => {
  const onSubmit = useLogin()
  const { handleSubmit, errors, register } = useValidations(false)

  return (
    <div className=" flex-col flex items-center">
      <Form
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        onSubmit={onSubmit}
      />

      <AuthHandler url="/register" title="I don't have an account" />
    </div>
  )
}
