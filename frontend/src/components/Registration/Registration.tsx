import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import { borderRadius } from '@mui/system';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncUser } from './authSlice';
import { FormInputs } from './types/state';
import { Authlayput } from '../AuthLayout/AuthLayout';

function Registration(): JSX.Element {
  // const { name } = useParams();
  // const { user } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      email: Yup.string().email('Некорректный email').required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      dispatch(addAsyncUser(values));
      navigate('/');
    },
  });
  return (
    <Authlayput linkTitle="У вас уже есть аккаунт?" href="/auth/login" title="Регистрация" handleSubmit={formik.handleSubmit} buttonTitle="Регистрация">

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
      <TextField
        id="outlined-name"
        name="checkPassword"
        label="Check Password"
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
    </Authlayput>

  );
}

export default Registration;

// function useSelector(arg0: (state: RootState) => any): { users: any; } {
//   throw new Error('Function not implemented.');
// }
