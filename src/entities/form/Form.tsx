'use client'
import { Button, Input } from '@/shared'
import { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { FormData, useValidations } from './useValidations'
import { useAppDispatch } from '@/store/hooks'
import { fetchAuth, fetchAuthViewerCheck, writeTokenOnSubmit } from '@/features'
import { useRouter } from 'next/navigation'

export const Form = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)
  const { handleSubmit, errors, register } = useValidations()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    const viewerData = await dispatch(fetchAuth(data))
    writeTokenOnSubmit(viewerData)
    router.push('/')
  }

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

      <Button appearance="primary">Submit</Button>
    </form>
  )
}
