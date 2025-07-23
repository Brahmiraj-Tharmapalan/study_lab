'use client'

import { usePathname } from 'next/navigation'
import { SidebarCard } from './sidebar'

export function SidebarWrapper() {
  const pathname = usePathname()
  return <SidebarCard key={pathname} pathname={pathname} />
}
