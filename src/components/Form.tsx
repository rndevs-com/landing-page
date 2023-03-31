import { useForm, SubmitHandler } from 'react-hook-form'
import Mail from '@/assets/images/mail.svg'
import Link from 'next/link'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type Inputs = {
  privacyPolicy: boolean
  email: string
}

interface FormProps {
  className?: string
}

const Form = ({ className }: FormProps) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Podaj email')
      .email('Niepoprawny adres email')
      .matches(
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g,
        'Niepoprawny adres email'
      ),
    privacyPolicy: Yup.boolean()
      .oneOf([true], 'To pole jest wymagane')
      .required()
      .default(false),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(formOptions)

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="flex flex-col w-full relative">
        <input
          placeholder="Email..."
          {...register('email', { required: true })}
          className={`input${errors.email ? ' input--error' : ''} text-white`}
          autoComplete="off"
        />
        <Mail className="input__icon" />
      </div>
      {errors.email && (
        <span className="text-red-400">{errors.email.message}</span>
      )}

      <label className="lg:flex items-center">
        <input
          type="checkbox"
          className="relative mr-3 border-gray-600 border rounded appearance-none h-4 w-4 
          focus:ring-0 focus:ring-gray-700 checked:border-gray-700 checked:after:block c
          hecked:content-[''] checked:after:w-1/2 checked:after:h-1/2 checked:after:bg-gray-600 
          checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 
          checked:after:-translate-y-1/2 checked:after:rounded-sm top-1 lg:top-0"
          {...register('privacyPolicy', { required: true })}
        />
        <span className="text-gray-700 text-sm">
          Wyrażam zgodę na przetwarzanie moich danych osobowych
        </span>
      </label>
      {errors.privacyPolicy && (
        <span className="text-red-400">{errors.privacyPolicy.message}</span>
      )}
      <p className="mt-2 text-gray-700 text-sm">
        Zapoznałem/am się z&nbsp;
        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
          Polityką prywatności
        </Link>
      </p>

      <button
        type="submit"
        className="bg-gray-800 py-3 px-2 rounded-lg text-sm font-normal text-gray-600 hover:bg-gray-700 hover:text-white transition"
      >
        Dołącz do listy oczekujących
      </button>
    </form>
  )
}

export default Form
