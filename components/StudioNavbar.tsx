import Link from "next/link"
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'


function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#F7Ab0a] flex items-center">
                <ArrowUturnLeftIcon className="w-6 h-6 text-[#f7ab0a] mr-2"/>
                Go to Website
            </Link>
        </div>
        <>
            {props.renderDefault(props)}
        </>
    </div>
  )
}

export default StudioNavbar