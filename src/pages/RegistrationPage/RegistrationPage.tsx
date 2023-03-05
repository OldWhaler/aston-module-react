import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setNewUserDataInStore } from '../../store/userSlice';
import { isUserInLocalStorage } from '../../helpers/isUserInLocalStorage';

import './RegistrationPage.scss';

interface FormValues {
  login: string;
  password: string;
};

const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'all'
  });

  const onSubmit = ({ login, password }: FormValues) => {
    dispatch(setNewUserDataInStore({
      loginName: login,
      password,
      favorites: [],
      history: [],
      isLogged: true
    }))
    navigate('/')
  }

  return (
    //! Переделать путь в Link кнопки войти когда страница входа будет реализована
    <div className='registration'>
      <Link to='/' className='registration__link'>Войти</Link>

      <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>

        <div className='registration__wrapper'>
          <input
            className='registration__input'
            placeholder='Login'
            {...register(
              'login',
              {
                required: 'Поле не должно быть пустым',
                minLength: {
                  value: 4,
                  message: 'Логин должен содержать не менее 4-х символов'
                },
                validate: (value) => !isUserInLocalStorage(value)
              }
            )}
          />
          <p className='registration__warning'>
            {errors?.login?.type === 'validate' && 'Такой пользователь уже существует'}
            {errors?.login?.message || ''}
          </p>
        </div>

        <div className='registration__wrapper'>
          <input
            className='registration__input'
            type="password"
            placeholder='Password'
            {...register(
              'password',
              {
                required: 'Поле не должно быть пустым',
                minLength: {
                  value: 4,
                  message: 'Пароль должен содержать не менее 4-х символов'
                }
              }
            )}
          />
          <p className='registration__warning'>{errors?.password?.message || ''}</p>
        </div>

        <input type="submit" value="Зарегистрироваться" className='registration__submit' disabled={!isValid} />
      </form>

    </div>
  )
}

export { RegistrationPage }