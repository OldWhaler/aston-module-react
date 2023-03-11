import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setUserDataFromLocalStorage } from '../../store/userSlice';
import { isUserInLocalStorage } from '../../helpers/isUserInLocalStorage';
import { checkUserPasswordInLocalStorage } from '../../helpers/checkUserPasswordInLocalStorage';

import './LoginPage.scss';
import { getUserDataFromLocalStorage } from '../../helpers/getUserDataFromLocalStorage';

interface FormValues {
  login: string;
  password: string;
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    getValues,
    getFieldState,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur'
  });

  const onSubmit = ({ login }: FormValues) => {
    const user = getUserDataFromLocalStorage(login);
    user.isLogged = true;
    dispatch(setUserDataFromLocalStorage(user));
    navigate('/');
  };

  return (
    <div className='login'>
      <Link to='/registration' className='login__link'>Зарегистрироваться</Link>

      <form className='login__form' onSubmit={handleSubmit(onSubmit)} autoComplete='on'>

        <div className='login__wrapper'>
          <input
            type='text'
            autoComplete='username'
            className='login__input'
            placeholder='Login'
            {...register(
              'login',
              {
                required: 'Поле не должно быть пустым',
                minLength: {
                  value: 4,
                  message: 'Логин должен содержать не менее 4-х символов'
                },
                validate: (value) => isUserInLocalStorage(value) || 'Такого пользователя не существует'
              }
            )}
          />
          {getFieldState('login').invalid && <p className='login__warning'>{errors?.login?.message}</p>}
        </div>

        <div className='login__wrapper'>
          <input
            autoComplete='current-password'
            className='login__input'
            type="password"
            placeholder='Password'
            {...register(
              'password',
              {
                required: 'Поле не должно быть пустым',
                minLength: {
                  value: 4,
                  message: 'Пароль должен содержать не менее 4-х символов'
                },
                validate: (password) => checkUserPasswordInLocalStorage(getValues('login'), password) || 'Пароль не верен'
              }
            )}
          />
          {!getFieldState('login').invalid
            && getFieldState('password').invalid
            && <p className='login__warning'>{errors?.password?.message}</p>}
        </div>

        <input type="submit" value="Войти" className='login__submit' />
      </form>

    </div>
  );
};

export { LoginPage };