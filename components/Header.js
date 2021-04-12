import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);

    };

    return <header className="sticky top-0 bg-white">
                <div className='flex w-full items-center p-6'>
                    <Image 
                        src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' className=""
                        width={120}
                        height={40}
                        onClick={() => router.push("/")}
                        className="cursor-pointer"
                    />
                    <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                        <input
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none"
                        type="text"
                        />
                        <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value="")}
                        />
                        <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                        <SearchIcon onClick={search} className="h-6 mr-3 hidden sm:inline-flex border-l-2 pl-4 border-gray-300 cursor-pointer"/>
                        <button hidden onClick={search} className="" type="submit">Search</button>
                    </form>
                    <Avatar className="ml-auto" url="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/116712349_1136919406692362_6264826831671252910_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=0Ab2ArbRtQoAX_jgqQR&_nc_ht=scontent.fhan2-6.fna&tp=27&oh=e67a087f14c08fd6dfbd3655e347a532&oe=609787D6"/>
                </div>
                <HeaderOptions/>
           </header>
}

export default Header
