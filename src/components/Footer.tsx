import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container flex flex-row justify-between items-center mx-auto min-h-[120px]">
      <div className="space-x-8">
        <Link href="/statute" className="link">
          Regulamin
        </Link>
        <Link href="/privacy-policy" className="link">
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
