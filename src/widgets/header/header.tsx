'use client'
import { Container, CreatePost, Logo, UserPanel } from '@/shared'
import { Nav } from '@/shared/ui/Nav/Nav'
import { menuItems } from './consts'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  return (
    <header className="py-3 bg-orange-200">
      <Container className="flex items-center justify-between gap-x-10">
        <Logo />
        <Nav menuItems={menuItems} pathname={pathname} />
        <div className="flex gap-x-10">
          <CreatePost />
          <UserPanel />
        </div>
      </Container>
    </header>
  )
}
