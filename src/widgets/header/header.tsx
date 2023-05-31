'use client'
import { Container, CreatePost, Logo, UserPanel } from '@/shared'
import { Nav } from '@/shared/ui/Nav'
import { menuItems } from './consts'
import { usePathname } from 'next/navigation'
import { useAppDispatch } from '@/store/hooks'
import { fetchAuthViewerCheck, isAuthSelector, logout } from '@/features'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const Header = () => {
  const pathname = usePathname()
  const isAuth = useSelector(isAuthSelector)
  const dispatch = useAppDispatch()

  const viewerLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
  }

  useEffect(() => {
    dispatch(fetchAuthViewerCheck())
  }, [])
  return (
    <header className="py-3 bg-orange-200">
      <Container className="flex items-center justify-between gap-x-10">
        <Logo />
        <Nav menuItems={menuItems} pathname={pathname} />
        <div className="flex gap-x-10">
          <CreatePost />
          <UserPanel logout={viewerLogout} isAuth={isAuth} />
        </div>
      </Container>
    </header>
  )
}
