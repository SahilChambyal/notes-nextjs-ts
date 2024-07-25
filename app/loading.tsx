import dynamic from 'next/dynamic';
// import Loader from '@/components/loader';
const Loader = dynamic(() => import('@/components/loader'),{
  ssr:false,
})
const Loading = () => {
  <div>
    <Loader />
  </div>
}

export default Loading