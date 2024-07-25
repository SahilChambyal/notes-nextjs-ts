// import MainPage from '@/components/main-page';
'use client'
import Login from '@/components/log';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const MainPage = dynamic(() => import("@/components/main-page"),{
  ssr: false,
})


const Home = () => {
  // const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged') === 'true');
  // const login = (setIsLogged) =>{
  //   <Login />
  //   setIsLogged=true
  // }

  // if(!isLogged){
  //   window.location.href = '/login'
  // }
  return<>
    <MainPage />
  </>
}

export default Home