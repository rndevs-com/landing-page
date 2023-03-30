import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <header className="container flex flex-row justify-between items-center mx-auto lg:min-h-[120px] py-5 lg:py-0">
      <h3 className="text-white">rndevs</h3>
      {router.route === '/benefits' ? null : (
        <Link
          href="/benefits"
          className="py-3 px-6 rounded-lg text-sm font-normal bg-gray-50 text-gray-800 hover:bg-gray-700 hover:text-white transition"
        >
          Sprawdź korzyści
        </Link>
      )}
    </header>
  )
}

export default Header
