import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '@/utils/FirebaseConfig';
import { CHECK_USER_ROUTE } from '@/utils/ApiRoutes';
import { useRouter } from 'next/router';
import { useStateProvider } from '@/context/StateContext';
import { reducerCases } from '@/context/constants';

const Login = () => {

  const router = useRouter()

  const [{}, dispatch] = useStateProvider()

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(firebaseAuth, provider)
    const { displayName: name, email, photoURL: profileImage } = user
    //console.log(name, email, profileImage, user)
    if(email) {
      try{
        const { data } = await axios.post(CHECK_USER_ROUTE, { email })
        console.log(data)
        if(!data.success) {
          dispatch({
            type: reducerCases.SET_NEW_USER,
            newUser: true
          })
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: { name, email, profileImage, status: "" }
          })
          router.push("/onboarding")
        }
      } catch (err) {
        console.log("error in checking if email already exists in DB | login.jsx - 18", err)
      }
    }
  }

  return (

    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image height={300} width={300} src={'/whatsapp.gif'} alt='' />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <button onClick={handleLogin} className='flex items-center justify-center p-5 gap-7 bg-search-input-container-background'>
        <FcGoogle className='text-4xl' />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  )

}

export default Login;