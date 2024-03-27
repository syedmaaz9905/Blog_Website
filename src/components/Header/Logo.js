import Image from "next/image"
import Link from "next/link"
import logoImage from '../../../public/logo.png'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-12 md:w-16 rounded-full overflow-hidden mr-2 md:mr-4">
            <Image src={logoImage} alt="logo" className="w-full h-auto rounded-full" sizes="33vw" priority />
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">ModishChronicles</span>
    </Link>
  )
}

export default Logo