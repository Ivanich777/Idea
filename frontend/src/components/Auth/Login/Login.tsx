import React from 'react';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import  AuthLayout  from '../AuthLayout/AuthLayout';
import { addAsyncUser } from '../authSlice';
import { useAppDispatch } from '../../../store';
import { checkAsyncUser } from '../authSlice';
import { useNavigate } from 'react-router-dom';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
      navigate('/');
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
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: 'red' }}>{formik.errors.password}</div>
      ) : null}
    </AuthLayout>
  );
}

export default Login;