import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux/es/exports'
import { AppDispatch, RootState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
