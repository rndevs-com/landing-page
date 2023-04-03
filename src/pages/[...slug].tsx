import PrivacyPolicy from '@/components/Law/PrivacyPolicy'
import Statute from '@/components/Law/Statute'
import { useRouter } from 'next/router'

const LawPage = () => {
  const router = useRouter()
  const slug = (router.query.slug as string) || []

  return (
    <div className="container mx-auto space-y-8 md:my-24 my-5">
      <div className="max-w-screen-md text-white space-y-8 mx-auto">
        <h3 className="text-white md:text-5xl text-3xl font-bold">
          {slug[0] === 'statute' ? 'Regulamin' : 'Polityka prywatności'}
        </h3>
        {slug[0] === 'statute' ? <Statute /> : <PrivacyPolicy />}
      </div>
    </div>
  )
}

export default LawPage
