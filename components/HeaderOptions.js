import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
    return <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
                <div className='flex space-x-6'>
                    <HeaderOption Icon={SearchIcon} title="Tất cả" selected/>
                    <HeaderOption Icon={PhotographIcon} title="Hình ảnh"/>
                    <HeaderOption Icon={PlayIcon} title="Video"/>
                    <HeaderOption Icon={NewspaperIcon} title="Tin tức "/>
                    <HeaderOption Icon={MapIcon} title="Maps"/>
                    <HeaderOption Icon={DotsVerticalIcon} title="Thêm"/>
                </div>

                <div className='flex space-x-4'>
                    <p className="link">Settings</p>
                    <p className="link">Tools</p>
                </div>
           </div>
}

export default HeaderOptions
