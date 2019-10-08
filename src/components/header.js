import React from "react"
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import Logo from '../components/icons/logo'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.contact}>
        anjoskids@anjokidstransporte.com.br
      </div>
      <div className={headerStyles.navIcon}><Logo /></div>
      <nav>
        <div className={headerStyles.home}>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Home
            </Link>
        </div>
        <div className={headerStyles.sobre}>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/sobre"
          >
            Sobre nós
            </Link>
        </div>
        <div className={headerStyles.area}>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/atuacao"
          >
            Área de atuação
            </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header