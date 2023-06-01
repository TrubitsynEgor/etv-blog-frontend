'use client'
import { Button, Input } from '@/shared'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import { FormData, RegisterFormData } from '@/features'

type FormDataAlias = FormData | RegisterFormData

interface FormProps {
  onSubmit: (data: any) => Promise<void> // must be FormDataAlias alias
  //! Property 'fullName' does not exist on type (But it's there! need advice)
  handleSubmit: UseFormHandleSubmit<FormDataAlias>
  register: UseFormRegister<FormDataAlias>
  errors: any //! same thing ^
  //FieldErrors<FormDataAlias> type here work for all field Except fullName!
  isRegister?: boolean
}

export const Form = ({
  onSubmit,
  handleSubmit,
  register,
  errors,
  isRegister,
}: FormProps) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-y-3 flex-col text-slate-100 w-80"
    >
      <Input
        {...register('email')}
        type="text"
        placeholder="Enter your email"
        error={!!errors.email}
      >
        {<span className="text-red-600">{errors.email?.message}</span>}
      </Input>
      <Input
        {...register('password')}
        type={passwordIsVisible ? 'text' : 'password'}
        placeholder="Enter your password"
        error={!!errors.password}
      >
        {<span className="text-red-600">{errors.password?.message}</span>}
        <Button
          type="button"
          onClick={() => setPasswordIsVisible((prev) => !prev)}
          appearance="icon"
          aria-label={`Show password ${
            passwordIsVisible ? 'Now is visible' : 'Now is hide'
          }`}
          className=" text-slate-100  absolute right-1 mt-1.5 z-10"
        >
          {!passwordIsVisible ? <FaEye /> : <FaEyeSlash />}
        </Button>
      </Input>

      {isRegister && (
        <Input
          {...register('fullName')}
          type="text"
          placeholder="Enter your full name"
          error={!!errors.fullName}
        >
          {<span className="text-red-600">{errors.fullName?.message}</span>}
        </Input>
      )}

      <Button appearance="primary">Submit</Button>
    </form>
  )
}
