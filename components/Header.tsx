import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between font-bold space-x-2 px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
                <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgUQspLakPlp-LdD2uSHET1aTkVEayDz2U_qhm_W2_A&s"
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt="logo"
                    priority
                />
                <h1>The BLOG</h1>
            </Link>
        </div>
    </header>
  )
}

export default Header