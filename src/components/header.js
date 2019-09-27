import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import Logo from '../components/logo'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.navIcon}><Logo /></div>
        <nav>
          <div>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contato"
            >
              Contato
            </Link>
          </div>
          <div>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/sobre"
            >
              Sobre nós
            </Link>
          </div>
          <div>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contato"
            >
              Área de atuação
            </Link>
          </div>
        </nav>
    </header>
  )
}

export default Header