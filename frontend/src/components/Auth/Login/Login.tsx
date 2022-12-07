import React, { useEffect } from 'react';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthLayout from '../AuthLayout/AuthLayout';
import { addAsyncUser, checkAsyncUser } from '../authSlice';
import { useAppDispatch, RootState } from '../../../store';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user, error } = useSelector((srt:RootState) => srt.users);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
if (user) {
  navigate('/');
}
  }, [user]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Обязательное поле'),
      email: Yup.string().email('Некорректный email').required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      dispatch(checkAsyncUser(values));
      // navigate('/');
    },
  });
  return (
    <AuthLayout linkTitle="У вас еще нет аккаунта?" href="/auth/reg" title="Авторизация" handleSubmit={formik.handleSubmit} buttonTitle="Войти">
      <TextField
        id="outlined-name"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email}
        // error={formik.touched.email && formik.errors.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}
      <TextField
        id="outlined-name"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: 'red' }}>{formik.errors.password}</div>
      ) : null}

      <p style={{ fontFamily: 'Times New Roman, Times, serif',
fontSize: '21px',
letterSpacing: '1.6px',
wordSpacing: '-1.4px',
color: '#000000',
fontWeight: '400',
textDecoration: 'none',
fontStyle: 'normal',
fontVariant: 'normal',
textTransform: 'none' }}
      >{error.message}
      </p>
    </AuthLayout>
  );
}

export default Login;
