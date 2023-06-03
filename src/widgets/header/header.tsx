'use client'
import { Container, CreatePost, Logo, UserPanel } from '@/shared'
import { Nav } from '@/shared/ui/Nav'
import { menuItems } from './consts'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAuthViewerCheck, isAuthSelector, logout } from '@/features'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '@/store/store'

export const Header = () => {
  const pathname = usePathname()
  const { id } = useParams()
  const router = useRouter()
  const isAuth = useSelector(isAuthSelector)
  const data = useSelector((state: RootState) => state.auth.data)
  const name = data?.fullName.split(' ')[0]
  const dispatch = useAppDispatch()

  const viewerLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    router.push('/')
  }

  useEffect(() => {
    dispatch(fetchAuthViewerCheck())
  }, [])

  return (
    <header className="py-3 bg-orange-200">
      <Container className="flex items-center justify-between gap-x-10">
        <Logo />
        <Nav menuItems={menuItems} pathname={pathname} id={id} />
        <div className="flex gap-x-10">
          <CreatePost />
          <UserPanel logout={viewerLogout} isAuth={isAuth} name={name} />
        </div>
      </Container>
    </header>
  )
}
