import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from "next/image";
import {useRouter} from "next/router";
import Footer from '../components/Footer';
import { useRef } from 'react';
export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);

  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
          <Avatar url="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/116712349_1136919406692362_6264826831671252910_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=0Ab2ArbRtQoAX_jgqQR&_nc_ht=scontent.fhan2-6.fna&tp=27&oh=e67a087f14c08fd6dfbd3655e347a532&oe=609787D6"/>
        </div>
      </header>
      
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' className=""
        width={300}
        height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 p-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5"/>
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4'>
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer/>
    </div>
  )
}
