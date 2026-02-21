import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__row}>
          <div className={styles.logo}>
            <span>My Logo</span>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>
                <Link
                  to='/login'
                  className={`${styles.authButton} ${styles.authButtonSecondary}`}
                >
                  <span className={styles.text}>Log In</span>
                </Link>
              </li>

              <li>
                <Link
                  to='/signup'
                  className={`${styles.authButton} ${styles.authButtonPrimary}`}
                >
                  <span className={styles.text}>Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
