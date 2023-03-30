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
        <p className="text-white md:text-base text-sm font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          adipisci voluptates voluptatem, ipsam vero in a minima laborum
          perferendis minus non consequatur, fugiat laudantium. Laboriosam
          itaque id facilis neque nemo nam dolores totam atque rerum corrupti
          dolorum possimus, omnis labore corporis eaque! Autem, excepturi
          possimus! Pariatur alias laboriosam natus mollitia culpa neque est!
          Modi, tempora est ex nostrum quia fugiat rerum molestias iste
          temporibus, dolore iusto! Animi dicta non soluta voluptas corrupti
          saepe ab accusamus necessitatibus. Ad totam blanditiis excepturi,
          dolorum quibusdam, non nobis ab vero voluptatum earum adipisci
          delectus error sit velit odio! Reprehenderit temporibus mollitia
          excepturi aperiam vel quidem, itaque, ab dicta aspernatur, voluptatum
          deleniti modi. Ex+plicabo magni soluta possimus deserunt eveniet
          nesciunt repudiandae alias animi! Exercitationem optio obcaecati,
          nihil nobis sed reprehenderit maxime? Facilis iste animi unde
          suscipit, possimus ratione exercitationem odio, assumenda neque
          accusantium similique illo rem adipisci ducimus dolorum hic illum.
          Autem est fugiat beatae quae provident iusto sequi suscipit quam nihil
          ullam ea ab incidunt porro, repellat quas expedita debitis, doloribus
          id at minus cupiditate, inventore a libero.
        </p>
      </div>
    </div>
  )
}

export default LawPage
