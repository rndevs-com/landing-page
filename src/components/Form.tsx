import { useForm, SubmitHandler } from 'react-hook-form'
import User from '@/assets/images/user.svg'
import Mail from '@/assets/images/mail.svg'

type Inputs = {
  name: string
  email: string
}

interface FormProps {
  className?: string
}

const Form = ({ className }: FormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  console.log(watch('name'))
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="flex flex-col w-full relative">
        <input
          placeholder="Imię i Nazwisko..."
          {...register('name', { required: true })}
          className={`input${errors.name ? ' input--error' : ''}`}
        />
        <User className="input__icon" />
        {errors.name && (
          <span className="text-red-400">Podaj imię i nazwisko</span>
        )}
      </div>

      <div className="flex flex-col w-full relative">
        <input
          placeholder="Email..."
          {...register('email', { required: true })}
          className={`input${errors.name ? ' input--error' : ''}`}
        />
        <Mail className="input__icon" />
        {errors.email && <span className="text-red-400">Podaj email</span>}
      </div>

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
