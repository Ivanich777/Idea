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
  }, [logopen]);
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
    <form
      onSubmit={formik.handleSubmit}
    >
      <div
        style={{
          paddingTop: '2%',
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
            width: '30%',
            height: 'fitContent',
            background: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            padding: '1.5rem',
            borderRadius: '20px',
          }}
        >
          <div
            style={{ marginTop: '-20px' }}
          >
            <h3 style={{ color: 'black', textAlign: 'center' }}>Регистрация</h3>
          </div>
          <TextField
            id="outlined-name"
            name="email"
            label="Email"
            color="warning"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email}
          />
            {formik.touched.email && formik.errors.email ? (
              <span style={{ color: 'red', fontSize: '15px', margin: '-10px 0px -10px' }}>{formik.errors.email}</span>
            ) : null}

      <TextField
        id="outlined-name"
        name="password"
        label="Password"
        type="password"
        color="warning"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: 'red', fontSize: '15px', margin: '-10px 0px -10px' }}>{formik.errors.password}</div>
      ) : null}
      <TextField
        id="outlined-name"
        name="checkPassword"
        label="Check Password"
        type="password"
        color="warning"
        value={formik.values.checkPassword}
        onChange={formik.handleChange}
        error={formik.touched.checkPassword}
      />
      {formik.touched.checkPassword && formik.errors.checkPassword ? (
        <div style={{ color: 'red', fontSize: '15px', margin: '-10px 0px -10px' }}>{formik.errors.checkPassword}</div>
      ) : null}
      <TextField
        id="outlined-name"
        name="name"
        label="Name"
        color="warning"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: 'red', fontSize: '15px', margin: '-10px 0px -10px' }}>{formik.errors.name}</div>
      ) : null}
      <TextField
        id="outlined-name"
        name="surname"
        label="Surname"
        color="warning"
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
        color="warning"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div style={{ color: 'red' }}>{formik.errors.phone}</div>
      ) : null}
                 <p
                   style={{
                    fontFamily: 'Times New Roman, Times, serif',
                    fontSize: '14px',
                    letterSpacing: '1.6px',
                    wordSpacing: '-1.4px',
                    color: '#000000',
                    fontWeight: '400',
                    paddingBottom: '6px',
                    textDecoration: 'none',
                    fontStyle: 'normal',
                    fontVariant: 'normal',
                    textTransform: 'none',
                  }}
                 >
                  {error?.message}
                 </p>
          <Button
            color="warning"
            style={{ marginTop: '-50px', color: 'black' }}
            type="submit"
          >Регистрация
          </Button>
          <Button
            color="warning"
            style={{ marginTop: '-10px', color: 'black' }}
            onClick={handleRegClose}
          >Закрыть
          </Button>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* <Link href="/auth/login">У вас уже есть аккаунт?</Link> */}
            <Button
              color="warning"
              style={{ marginBottom: '-15px', marginTop: '-10px', marginLeft: '110px' }}
              onClick={regToLog}
            >У вас уже есть аккаунт?
            </Button>

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
