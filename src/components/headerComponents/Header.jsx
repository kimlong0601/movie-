import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
              headerRef.current.classList.add('shrink')
          } else {
              headerRef.current.classList.remove('shrink')
          }
      })
     
  }, []);

  const menuRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle('active');

  

  return (
    <header className="header" ref={headerRef}>
       <div className="container">
          <nav >
            <div className="header-logo">
              <Link to='/'><h1>Movi<span>e+</span></h1></Link>
            </div>
            <div className="menu-toggle" onClick={menuToggle}>
              <i class='bx bx-menu-alt-right' ></i>
            </div>
            <ul className="main-menu" ref={menuRef}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/movie'>Movie</Link>
              </li>
              <li>
                <Link to='/tv'>TV Series</Link>
              </li>
              <div className="menu-close" onClick={menuToggle}>
                <i class='bx bx-right-arrow-alt'></i>
              </div>
            </ul>
          </nav>
       </div>
    </header>
  )
}

export default Header