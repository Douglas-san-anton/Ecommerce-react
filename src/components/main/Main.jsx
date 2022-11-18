import React from 'react'
import Styles from './Main.module.css'
import product1 from '../../assets/image-product-1.jpg'
import p1Mini from '../../assets/image-product-1-mini.jpg'
import p2Mini from '../../assets/image-product-2-mini.jpg'
import p3Mini from '../../assets/image-product-3-mini.jpg'
import p4Mini from '../../assets/image-product-4-mini.jpg'
import minus from '../../assets/icon-minus.svg'
import plus from '../../assets/icon-plus.svg'
import cart from '../../assets/icon-cart.svg'

export const Main = () => {
  return (
    <section className={Styles.main__container}>
      <section className={Styles.main__secction_img}> {/* clase sin usar */}
        <figure>
          <img src={product1} alt="logo" className={Styles.image__hero} />
        </figure>

        <figure className={Styles.image__mini}>
          <img src={p1Mini} alt="logo" />
          <img src={p2Mini} alt="logo" />
          <img src={p3Mini} alt="logo" />
          <img src={p4Mini} alt="logo" />
        </figure>

      </section>

      <section className={Styles.main__secction_text}>
        <h5>Sneaker Company</h5>

        <h1>Fall Limited Edition Sneakers</h1>

        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

        <div className={Styles.section__price}>
          <span>$125.00</span>
          <span>50%</span>
        </div>

        <span className={Styles.price__disc}>$250.00</span>

        <section className={Styles.section__add}>

          <div className={Styles.section__add_buttons}>
            <button className={Styles.btn__minus}><img src={minus} alt="" /></button>
            <button className={Styles.btn__count}>0</button>
            <button className={Styles.btn__plus}><img src={plus} alt="" /></button>
          </div>

          <button className={Styles.btn__add}><img src={cart} alt="" /> Add to cart</button>

        </section>

      </section>
    </section>
  )
}
