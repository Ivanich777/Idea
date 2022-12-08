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
import { checkAsyncUser } from '../authSlice';

// import AuthLayout from '../AuthLayout/AuthLayout';
// import { Button, Link } from '@mui/material';
// import img from './cool-background.png';
// import { useNavigate } from 'react-router-dom';
import '../AuthLayout/reg.css';
// import { Outlet, NavLink } from 'react-router-dom';

// eslint-disable-next-line max-len
function LoginDesktop({
  handleLogClose,
  logToReg,
  logopen,
}: {
  handleLogClose: () => void;
  logToReg: () => void;
  logopen: boolean;
}): JSX.Element {
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
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Обязательное поле'),
      email: Yup.string()
        .email('Некорректный email')
        .required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      dispatch(checkAsyncUser(values));
      // navigate('/');
    },
  });
  return (
    <div className="modal">
      <Modal open={logopen} onClose={handleLogClose}>
        <div className="top" id="modal-modal-title">
          <form onSubmit={formik.handleSubmit}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '6%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  fontSize: '18px',
                  width: '30%',
                  height: 'fitContent ',
                  background: 'white',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                  padding: '1.5rem',
                  borderRadius: '20px',
                }}
              >
                <div>
                  <h3 style={{ color: 'black', textAlign: 'center' }}>Логин</h3>
                </div>
                <TextField
                  id="outlined-name"
                  name="email"
                  label="Email"
                  color='warning'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: 'red', fontSize:'15px', margin:'-10px 0px -10px' }}>{formik.errors.email}</div>
                ) : null}

                <TextField
                  id="outlined-name"
                  name="password"
                  label="Password"
                  type="password"
                  color='warning'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: 'red', fontSize:'15px', margin:'-10px 0px -10px' }}>{formik.errors.password}</div>
                ) : null}

                <Button 
                style={{marginTop:'-10px',color:'black'}}
                type="submit">Войти</Button>
                <Button 
                style={{marginTop:'-10px',color:'black'}}
                onClick={handleLogClose}>Закрыть</Button>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {/* <Link href="/auth/reg">У вас еще нет аккаунта?</Link> */}
                  <Button 
                  color='warning'
                  style={{marginBottom:'-35px', marginTop:'-5px', marginLeft:'110px'}}
                  onClick={logToReg}>У вас еще нет аккаунта?</Button>
                </div>
                <p
                  style={{
                    fontFamily: 'Times New Roman, Times, serif',
                    fontSize: '14pxs',
                    letterSpacing: '1.6px',
                    wordSpacing: '-1.4px',
                    color: '#000000',
                    fontWeight: '400',
                    textDecoration: 'none',
                    fontStyle: 'normal',
                    fontVariant: 'normal',
                    textTransform: 'none',
                  }}
                >
                  {error?.message}
                </p>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default LoginDesktop;
