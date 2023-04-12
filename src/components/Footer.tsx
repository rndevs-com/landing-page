import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container flex md:flex-row flex-col justify-between items-center mx-auto md:min-h-[120px] space-y-5 md:space-y-0 py-5 md:py-0">
      <div className="space-x-8">
        <Link
          href="/statute"
          className="link hover:text-[#61DAFB] ease-in transition-colors"
        >
          Regulamin
        </Link>
        <Link
          href="/privacy-policy"
          className="link hover:text-[#61DAFB] ease-in transition-colors"
        >
          Polityka prywatności
        </Link>
      </div>
      <div>
        <p className="link">Copyright © rndevs.com. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
