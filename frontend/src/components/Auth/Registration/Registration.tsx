import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { RootState, useAppDispatch } from '../../../store';
import { addAsyncUser } from '../authSlice';
import AuthLayout from '../AuthLayout/AuthLayout';
import './registr.css';

function Registration(): JSX.Element {
  const { user, error } = useSelector((srt: RootState) => srt.users);
  const dispatch = useAppDispatch();
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
      checkPassword: '',
      phone: '',
      name: '',
      surname: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Не должно превышать 15 символов')
        .required('Обязательное поле'),
      password: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Обязательное поле'),
      checkPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
        .required('Обязательное поле'),
      email: Yup.string()
        .email('Некорректный email')
        .required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      dispatch(addAsyncUser(values));
    },
  });
  return (
    <AuthLayout
      linkTitle="У вас уже есть аккаунт?"
      href="/auth/login"
      title="Регистрация"
      handleSubmit={formik.handleSubmit}
      buttonTitle="Регистрация"
    >

      <TextField
        id="outlined-name"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email}
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
      <TextField
        id="outlined-name"
        name="checkPassword"
        label="Check Password"
        type="password"
        value={formik.values.checkPassword}
        onChange={formik.handleChange}
      />
      {formik.touched.checkPassword && formik.errors.checkPassword ? (
        <div style={{ color: 'red' }}>{formik.errors.checkPassword}</div>
      ) : null}
      <TextField
        id="outlined-name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: 'red' }}>{formik.errors.name}</div>
      ) : null}
      <TextField
        id="outlined-name"
        name="surname"
        label="Surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
      />
      {formik.touched.surname && formik.errors.surname ? (
        <div style={{ color: 'red' }}>{formik.errors.surname}</div>
      ) : null}
      <TextField
        id="outlined-name"
        name="phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div style={{ color: 'red' }}>{formik.errors.phone}</div>
      ) : null}
      <p style={{
        fontFamily: 'Times New Roman, Times, serif',
        fontSize: '21px',
        letterSpacing: '1.6px',
        wordSpacing: '-1.4px',
        color: '#000000',
        fontWeight: '400',
        textDecoration: 'none',
        fontStyle: 'normal',
        fontVariant: 'normal',
        textTransform: 'none'
      }}
      >{error.message}
      </p>
    </AuthLayout>
  );
}

export default Registration;
