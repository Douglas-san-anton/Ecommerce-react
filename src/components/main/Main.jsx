import React from 'react'
import Styles from './Main.module.css'
import product1 from '../../assets/image-product-1.jpg'
import p1Mini from '../../assets/image-product-1-mini.jpg'
import p2Mini from '../../assets/image-product-2-mini.jpg'
import p3Mini from '../../assets/image-product-3-mini.jpg'
import p4Mini from '../../assets/image-product-4-mini.jpg'

export const Main = () => {
  return (
    <section className={Styles.main__container}>
      <section className={Styles.main__secction_img}> // clase sin usar
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

      </section>
    </section>
  )
}
