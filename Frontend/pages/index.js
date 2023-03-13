import Header from "@/components/Header";
import { useEffect, useState } from "react";
import style from '../styles/Home.module.css'
import MainHeader from '../public/Images/png/image.png'
import sale from '../public/Images/png/images.png'
import FontHeader from '../public/Images/svg/fontheader.svg'
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    document.title = 'GameStore';
    fetch('https://dummyjson.com/products?limit=10')
    .then(res => res.json())
    .then((data) => {
      setData(data)
      console.log(data)
    })
  }, [])

  return (
    <>
        <Header/>
        <main>
          <section className={style.main_header}>
            <div className={`${style.jumbotron} d-flex align-items-center`}>
              <Image src={MainHeader} alt='Header Game' />

              <div className={`container ${style.box_jumbotron}`}>
                <div className={`mb-4 ${style.title}`}>
                  <Image src={FontHeader} alt='Header Game' />
                </div>
                <div className={`mb-4 ${style.desc}`}>
                  <span>Survive to escape the horrors of Callisto using a unique blend of shooting and close-quarters combat.</span>
                </div>
                <input type='button' className={`btn ${style.btn}`} value='Download Now' />
              </div>
            </div>
          </section>

          <div className="container">
            <section className={`mt-4 mb-4 ${style.main_sale}`}>
              <h6 className="mb-3">Game On Sale</h6>

              <div className={`d-flex align-items-center gap-3 ${style.sale}`}>

                  <div className={`${style.product_sale}`}>
                    <Image src={sale} alt='Header Game' />
                    <div className={`${style.title}`}>
                      <h6>MOBA GAME</h6>
                    </div>
                    <div className={`${style.name}`}>
                      <h6>Fabled Lands-GOG</h6>
                    </div>
                    <div className={`${style.price} d-flex justify-content-between align-items-center`}>
                      <span className={`badge ${style.badge}`}>-17% </span>

                      <div className={`${style.discount} d-flex flex-column`}>
                        <span>IDR 26.000</span>
                        <h6>IDR 6.000</h6>
                      </div>                      
                    </div>
                  </div>

              </div>
            </section>
          </div>
        </main>
    </>
  )
}
