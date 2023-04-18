import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '@/assets/images/rndevs-logo.svg'

const Header = () => {
  const router = useRouter()

  return (
    <header className="container flex max-[400px]:flex-col justify-between items-center mx-auto lg:min-h-[120px] py-5 lg:py-0">
      <Link href="/">
        <Logo />
      </Link>
      {router.route === '/benefits' ? null : (
        <Link
          href="/benefits"
          className="py-3 px-6 max-[400px]:mt-6 max-[400px]:w-full text-center rounded-lg text-sm font-normal bg-gray-50 text-gray-800 hover:bg-[#61DAFB] hover:text-gray-700 transition ease-in"
        >
          Sprawdź
        </Link>
      )}
    </header>
  )
}

export default Header
