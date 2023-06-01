'use client'

import { Form } from '@/entities'
import { useRegister, useValidations } from '@/features'
import { AuthHandler } from '@/shared'

export const RegisterForm = () => {
  const onSubmit = useRegister()
  const { handleSubmit, errors, register } = useValidations(true)

  return (
    <div className=" flex-col flex items-center">
      <Form
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        onSubmit={onSubmit}
        isRegister
      />

      <AuthHandler url="/login" title="I already have an account" />
    </div>
  )
}
