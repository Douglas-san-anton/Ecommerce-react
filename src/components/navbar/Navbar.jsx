import React from 'react'
import Styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'

export const Navbar = () => {
  return (
    <nav className={Styles.nav}>

      <div className={Styles.nav__container}>

        <img className={Styles.nav__logo} src={logo} />

        <label htmlFor="menu" className={Styles.nav__label}>
          <img src={logo} alt="icon" className={Styles.nav__img}/>
        </label>
        <input type="checkbox" id="menu" className={Styles.nav__input}/>

        <div className={Styles.nav__menu}>
          <a href="#" className={Styles.nav__item}>Collections</a>
          <a href="#" className={Styles.nav__item}>Men</a>
          <a href="#" className={Styles.nav__item}>Women</a>
          <a href="#" className={Styles.nav__item}>About</a>
          <a href="#" className={Styles.nav__item}>Contact</a>
        </div>

      </div>

    </nav>
  )
}
