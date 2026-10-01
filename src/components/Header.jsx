import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const location = useLocation()

  const close = () => setOpen(false)


  /*
   * Check whether a navigation item is active
   */
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    )
  }


  /*
   * Close mobile menu when clicking outside
   *
   * Both the header and mobile menu are considered
   * part of the navigation area.
   */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!open) return

      const clickedInsideHeader =
        navRef.current?.contains(event.target)

      const clickedInsideMobileMenu =
        mobileMenuRef.current?.contains(event.target)

      if (
        !clickedInsideHeader &&
        !clickedInsideMobileMenu
      ) {
        setOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleOutsideClick
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      )
    }
  }, [open])


  /*
   * Close mobile menu when pressing Escape
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [])


  /*
   * Close mobile menu whenever the route changes
   */
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])


  return (
    <>
      {/* =================================================
          HEADER
      ================================================= */}

      <header
        ref={navRef}
        className={`nav ${open ? 'menu-open' : ''}`}
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="brand"
          aria-label="Crescendo Secure Solutions home"
          onClick={close}
        >
          <img
            className="logo"
  src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="Crescendo Secure Solutions"
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="navlinks"
          aria-label="Primary navigation"
        >

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                isActive(item.path)
                  ? 'active'
                  : ''
              }
              onClick={close}
            >
              {item.label}
            </Link>
          ))}


          {/* =================================================
              REQUEST A QUOTE
          ================================================= */}

          <Link
            className="quote"
            to="/request-quote"
            onClick={close}
          >
            Request a Quote

            <span>→</span>
          </Link>

        </nav>


        {/* =================================================
            MOBILE TOGGLE
        ================================================= */}

        <button
          type="button"
          className={`mobile-toggle ${
            open ? 'open' : ''
          }`}
          aria-label={
            open
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={open}
          onClick={() =>
            setOpen((value) => !value)
          }
        >
          <span className="hamburger">
            <span />
            <span />
            <span />
          </span>
        </button>

      </header>


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${
          open ? 'open' : ''
        }`}
        aria-hidden={!open}
      >

        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              isActive(item.path)
                ? 'active'
                : ''
            }
            onClick={close}
          >
            {item.label}
          </Link>
        ))}


        {/* =================================================
            MOBILE REQUEST A QUOTE
        ================================================= */}

        <Link
          className="mobile-quote"
          to="/request-quote"
          onClick={close}
        >
          Request a Quote

          <span>→</span>
        </Link>

      </div>
    </>
  )
}