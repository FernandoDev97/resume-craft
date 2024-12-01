import { ReactNode } from 'react'

import Logo from '@/assets/logo.svg'
import { NavItems } from '@/components/pages/dashboard/nav-items'

interface DashboardLayourtProps {
  children: ReactNode
}

const DashboardLayourt = ({ children }: DashboardLayourtProps) => {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex flex-col items-center border-r border-muted ">
        <div className="w-full p-6 border-b border-muted">
          <Logo className="max-w-[100px] mx-auto" />
        </div>
        <NavItems />
      </aside>

      <main>{children}</main>
    </div>
  )
}

export default DashboardLayourt
