import React from 'react'
import { ContactDialog } from './1 - contact-dialog.jsx'
import MobileDrawer from './1 - mobile-drawer.jsx'

const links = [
  { href: '/', label: 'Home' },
  { href: 'https://www.foym.org', label: 'Apply' },
]

export default function Header() {
  return (
    <header className="relative overflow-hidden h-fit w-full text-black">
      <nav className="flex justify-between items-center max-w-[1040px] w-full sm:py-4 mx-auto">
        <a href="/" className="text-2xl font-semibold tracking-tighter">Volunteer Today</a>
        <div className="md:flex justify-between items-center gap-6 hidden">
          {links.map(({ href, label }) => (
            <div key={`${href}${label}`}>
              <a className='tracking-tight text-neutral-600 font-medium' href={href}>{label}</a>
            </div>
          ))}
          <ContactDialog />
        </div>
        <div className='md:hidden'>
          <MobileDrawer className="" />
        </div>
      </nav>
    </header>
    
  )
}
