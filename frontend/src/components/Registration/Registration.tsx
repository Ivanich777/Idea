import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncUser } from './authSlice';
import { FormInputs } from './types/state';

function Registration(): JSX.Element {
  // const { name } = useParams();
  // const navigate = useNavigate();

  // const { user } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const auth = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(addAsyncUser());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

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
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      checkPassword: Yup.string().oneOf([Yup.ref('password')]),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={onSubmitHandler}>
      {/* <form onSubmit={handleSubmit(onSubmitHandler)}> */}
      <TextField id="outlined-name" label="Email" />
      <TextField
        id="outlined-name"
        label="Password"
      />
      <TextField
        id="outlined-name"
        label="Check Password"
      />
      <TextField id="outlined-name" label="Name" />
      <TextField id="outlined-name" label="Surname" />
      <TextField id="outlined-name" label="Phone" />
      {/* <TextField type="submit" /> */}
      <Button type="submit">Hui</Button>
    </form>
  );
}

export default Registration;

// function useSelector(arg0: (state: RootState) => any): { users: any; } {
//   throw new Error('Function not implemented.');
// }
