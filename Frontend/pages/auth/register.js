import { useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import style from '../../styles/Auth.module.css'
import GoogleImage from '../../public/Images/svg/google.svg'
import FacebookImage from '../../public/Images/svg/facebook2.svg'

export default function Register() {
  useEffect(() => {
    document.title = 'GameStore - Register';
  }, [])

  return (
    <>
        <div className={`d-flex align-items-center ${style.auth}`}>
            <div className={style.card}>
                <h5 className={`text-center mb-3 ${style.text}`}>Sign Up</h5>
                
                <form>
                    <div className="mb-3">
                        <label for="name" className={`${style.form_label} mb-3`}>Full Name</label>
                        <input type="text" className={style.form_control} id="name" name="name" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className={`${style.form_label} mb-3`}>Email Address</label>
                        <input type="email" className={style.form_control} id="email" name="email" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className={`${style.form_label} mb-3`}>Password</label>
                        <input type="password" className={style.form_control} id="password" name="password" placeholder="Enter your password" />
                    </div>

                    <button type="submit" className={`btn w-100 mb-3 ${style.btn_auth}`}>Sign Up</button>
                </form>

                <div className="d-flex align-items-center mb-3">
                    <hr className="flex-grow-1" />
                    <div className={`badge ${style.badge}`}>Or Sign In With</div>
                    <hr className="flex-grow-1" />
                </div>

                <div className={`d-flex justify-content-center gap-3`}>
                    <div className={`d-flex align-items-center justify-content-center ${style.circle}`}>
                        <Image 
                            src={FacebookImage}
                            alt='Facebook Logo Auth'
                            width='24px'
                            height='24px'
                        />
                    </div>
                    <div className={`d-flex align-items-center justify-content-center ${style.circle}`}>
                        <Image 
                            src={GoogleImage}
                            alt='Google Logo Auth'
                            width='24px'
                            height='24px'
                        />
                    </div>
                </div>

                <div className={'mt-3 text-center'}>
                    Already have an account?
                    <Link href="/auth/login" className={`ms-2 ${style.link_auth}`}>Sign In</Link>
                </div>
            </div>
        </div>
    </>
  )
}
