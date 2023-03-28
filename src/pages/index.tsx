import Form from '@/components/Form'

export default function Home() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto content">
        <div className="max-w-screen-sm text-center text-white space-y-4">
          <h1 className="text-5xl font-extrabold">
            Odwrócony job board dla React Native Developerów
          </h1>
          <p className="text-base	font-normal">
            Przestań marnować czas na przeglądanie setek ofert pracy. Otrzymuj
            spersonalizowane oferty dopasowane do Twojego profilu, które spełnią
            Twoje oczekiwania, decyduj o podjęciu współpracy i znajdź idealną
            pracę w React Native w krótkim czasie.
          </p>
        </div>
        <Form className="flex flex-col max-w-sm w-full space-y-4 mt-12" />
      </div>
    </>
  )
}
