import React, { useEffect } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import { Button, TextField, Modal, Link } from '@mui/material';
import { Formik } from 'formik';
import { borderRadius } from '@mui/system';
import { RootState, useAppDispatch } from '../../../store';
import { addAsyncUser, errorOff } from '../authSlice';
import { FormInputs } from './types/state';
// import AuthLayout from '../AuthLayout/AuthLayout';
// import { Button, Link } from '@mui/material';
// import img from './cool-background.png';
// import { useNavigate } from 'react-router-dom';
import '../AuthLayout/reg.css';
// import { Outlet, NavLink } from 'react-router-dom';

// eslint-disable-next-line max-len
function RegistrationDesktop({ handleRegClose, regToLog, open, logopen } : { handleRegClose: () => void, regToLog:()=>void, open: boolean, logopen: boolean }): JSX.Element {
  const { user, error } = useSelector((srt:RootState) => srt.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(errorOff());
  }, [logopen, open]);
  useEffect(() => {
    dispatch(errorOff());
    if (user) {
      navigate('/');
    }
      }, [user]);
      // useEffect(() => {
      //   if (user) {
      //     navigate('/');
      //   }
      // }, [user]);

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
          // navigate('/');
        },
      });
  return (

    <div className="modal">
    <Modal
      open={open}
      onClose={handleRegClose}
      // style={{ marginBottom: '200px' }}
    >
    <div className="modal-modal-title">
    <form onSubmit={formik.handleSubmit}>
      <div
        style={{
          paddingTop: '6%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '18px',
            flexDirection: 'column',
            gap: '1rem',
            width: '20%',
            height: 'fitContent',
            background: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            padding: '1.5rem',
            borderRadius: '20px',
          }}
        >
          <div>
            <h3 style={{ color: 'black', textAlign: 'center' }}>Регистрация</h3>
          </div>
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
            <p style={{ fontFamily: 'Times New Roman, Times, serif',
fontSize: '14px',
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
          <Button type="submit">Регистрация</Button>
          <Button onClick={handleRegClose}>Закрыть</Button>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* <Link href="/auth/login">У вас уже есть аккаунт?</Link> */}
            <Button onClick={regToLog}>У вас уже есть аккаунт?</Button>

          </div>

        </div>
      </div>
    </form>
    </div>
    </Modal>
    </div>
  );
}
export default RegistrationDesktop;
