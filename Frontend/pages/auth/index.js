import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react';
import style from '../../styles/Auth.module.css'
import UserImage from '../../public/Images/svg/user.svg'
import GoogleImage from '../../public/Images/svg/google.svg'
import FacebookImage from '../../public/Images/svg/facebook.svg'

function useRedirect() {
  const router = useRouter();
  const redirect = useCallback((url) => {
    router.push(url);
  }, [router]);

  return redirect;
}

export default function Auth() {
  const redirect = useRedirect();

  function handleClick() {
    redirect('/auth/login');
  }

  useEffect(() => {
    document.title = 'GameStore - Auth';
  }, [])
  
  return (
    <>
        <div className={`d-flex align-items-center ${style.auth}`}>
            <div className={style.card}>
                <h5 className={`text-center mb-3 ${style.text}`}>Login</h5>
                
                <div className={style.UserAuth}>
                    {/* LOGIN WITH USER */}
                    <div className={`d-flex justify-content-center  mb-3 ${style.box}`}>
                        <div className={`d-flex justify-content-between align-items-center gap-3 ${style.bg_box}`} onClick={handleClick}>
                            <div className={`d-flex align-items-center justify-content-center ${style.box_left} ${style.box_left_one}`}>
                                <Image 
                                    src={UserImage}
                                    alt='User Logo Auth'
                                    width='32px'
                                    height='32px'
                                />
                            </div>

                            <div className={style.box_right}>
                                Sign in with gamestore account
                            </div>
                        </div>
                    </div>
                    
                    {/* LOGIN WITH GOOGLE */}
                    <div className={`d-flex justify-content-center  mb-3 ${style.box}`}>
                        <div className={`d-flex justify-content-between align-items-center gap-3 ${style.bg_box}`}>
                            <div className={`d-flex align-items-center justify-content-center ${style.box_left} ${style.box_left_two}`}>
                                <Image 
                                    src={GoogleImage}
                                    alt='User Logo Auth'
                                    width='32px'
                                    height='32px'
                                />
                            </div>

                            <div className={style.box_right}>
                                Sign in with google account
                            </div>
                        </div>
                    </div>
                
                    {/* LOGIN WITH FACEBOOK */}
                    <div className={`d-flex justify-content-center ${style.box}`}>
                        <div className={`d-flex justify-content-between align-items-center gap-3 ${style.bg_box}`}>
                            <div className={`d-flex align-items-center justify-content-center ${style.box_left} ${style.box_left_three}`}>
                                <Image 
                                    src={FacebookImage}
                                    alt='User Logo Auth'
                                    width='32px'
                                    height='32px'
                                />
                            </div>

                            <div className={style.box_right}>
                                Sign in with facebook account
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'mt-3 text-center'}>
                    Don`t have an account?
                    <Link href="auth/register" className={`ms-2 ${style.link_auth}`}>Sign Up</Link>
                </div>
            </div>
        </div>
    </>
  )
}