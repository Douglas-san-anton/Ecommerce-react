import React from 'react'
import Styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import menu from '../../assets/icon-menu.svg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'

export const Navbar = () => {
  return (
    <nav className={Styles.nav}>

      <div className={Styles.nav__container}>

        <div className={Styles.nav__flex}>

            <img className={Styles.nav__logo} src={logo} />

            <label htmlFor="menu" className={Styles.nav__label}>
              <img src={menu} alt="icon" className={Styles.nav__img}/>
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

        <div className={Styles.nav__avatar}>
          <img src={cart} alt="" className={Styles.nav__avatar_cart} />
          <img src={avatar} alt="" className={Styles.nav__avatar_avatar}/>
        </div>

      </div>

    </nav>
  )
}
