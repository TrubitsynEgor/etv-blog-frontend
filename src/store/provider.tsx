'use client'

import { Provider } from 'react-redux'
import { store } from './store'
import { Header } from '@/widgets'

interface ReduxProviderProps {
  children: React.ReactNode
}

export const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  )
}
