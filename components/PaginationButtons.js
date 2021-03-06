import { ChevronRightIcon,ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
function PaginationButtons() {
    const router = useRouter();
    const startIndex= Number(router.query.start) || 0;

    return <div className="flex justify-between max-w-lg text-blue-700 mb-10">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="flex flex-col flex-grow items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5"/>
                        <p>Trước</p>
                    </div>
                
                </Link>
            )}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <div className="flex  flex-col flex-grow items-center cursor-pointer hover:underline">
                    <ChevronRightIcon className="h-5"/>
                    <p>Tiếp</p>
                </div>
            </Link>
           </div>
}

export default PaginationButtons
