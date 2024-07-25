// import MainPage from '@/components/main-page';
import dynamic from 'next/dynamic';

const MainPage = dynamic(() => import("@/components/main-page"),{
  ssr: false,
})
const Home = () => {

  return<>
  <MainPage />
  </>
}

export default Home