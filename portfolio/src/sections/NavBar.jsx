import { useState } from "react"
import { navLinks } from "../constants"

function NavItems() {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li"></li>
      ))}
    </ul>
  )
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }
  return (
    // Always cover the whole screen width
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      {/* Horizontally centered container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          {/* Child 1: Logo */}
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            David Vu
          </a>
          {/* Child 2: Menu Icon */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none flex sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          {/* Child 3: Navigation Items */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  )
}
