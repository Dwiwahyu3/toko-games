import Link from 'next/link'
import style from '../styles/Header.module.css'

export default function Header() {
  return (
    <nav className={'navbar fixed-top navbar-expand-lg navbar-dark bg-dark'}>
        <div className={'container'}>
            <Link href={'/'} className={`navbar-brand ${style.logo}`}>
                GamingStore
            </Link>
            <button className={'navbar-toggler'} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={'navbar-toggler-icon'}></span>
            </button>

            <div className={'collapse navbar-collapse'} id="navbarSupportedContent">
                <div className={'mx-auto order-0'}>
                    <ul className={'navbar-nav me-auto mb-2 mb-lg-0'}>
                        <li className={'nav-item'}>
                            <a className={'nav-link active'} aria-current="page" href="#">Home</a>
                        </li>
                        <li className={'nav-item'}>
                            <a className={'nav-link'} href="#">Library</a>
                        </li>
                        <li className={'nav-item'}>
                            <a className={'nav-link'} href="#">News</a>
                        </li>
                    </ul>
                </div>

                <form className={'me-2'}>
                    <input className={style.form_control} type="search" id="search" name="search" placeholder="Search"></input>
                </form>
                <Link href={'/auth'} className={`btn ${style.btn_auth}`}>
                    Login/Sign Up
                </Link>
            </div>
        </div>
    </nav>
  )
}
