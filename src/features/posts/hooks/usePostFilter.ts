import { useAppDispatch } from '@/store/hooks'
import { useState } from 'react'
import { getNewPosts, getPopularPosts } from '../reduxSlice'

export const usePostFilter = () => {
  const [isNew, setNew] = useState(false)
  const [isPopular, setPopular] = useState(false)
  const dispatch = useAppDispatch()

  const handleIsNew = () => {
    setNew(true)
    setPopular(false)
    dispatch(getNewPosts())
  }
  const handleIsPopular = () => {
    setPopular(true)
    setNew(false)
    dispatch(getPopularPosts())
  }

  return {
    isNew,
    isPopular,
    handleIsNew,
    handleIsPopular,
  }
}
