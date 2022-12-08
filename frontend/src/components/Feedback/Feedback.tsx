import React, { useEffect } from 'react';
import { Button, TextField, Modal, Link } from '@mui/material';
import { useFormik, Formik } from 'formik';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import feedbackSlice, { addAsyncFeedback } from './feedbackSlice';
import { FeedbackProduct } from './types/State';

// import feedbackSli;

// eslint-disable-next-line max-len
function Feedback({ handleFeedClose, feedopen } : { handleFeedClose: () => void, feedopen: boolean }):JSX.Element {
  // const { feedback, error } = useSelector((srt:RootState) => srt.feedbacks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      description: '',
      img: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Не должно превышать 15 символов')
        .required('Обязательное поле'),
      phone: Yup.string()
        .min(11, 'Не менее 11 символов')
        .required('Обязательное поле'),
      email: Yup.string()
        .email('Некорректный email')
        .required('Обязательное поле'),
    }),
    onSubmit: (values:FeedbackProduct) => {
      dispatch(addAsyncFeedback(values));
    },
  });
  return (
    <div className="modal">
    <Modal
      open={feedopen}
      onClose={handleFeedClose}
      // style={{ marginBottom: '200px' }}
    >
    <div className="modal-modal-title">
    <form onSubmit={formik.handleSubmit}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '15%',
        }}
      >
        <div
          style={{
            display: 'flex',
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
          <div>
            <h3 style={{ color: 'black', textAlign: 'center' }}>Форма обратной связи</h3>
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
        name="phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div style={{ color: 'red' }}>{formik.errors.phone}</div>
      ) : null}
      <TextField
        id="outlined-name"
        name="img"
        label="Img"
        value={formik.values.img}
        onChange={formik.handleChange}
      />
      {formik.touched.img && formik.errors.img ? (
        <div style={{ color: 'red' }}>{formik.errors.img}</div>
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
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      {formik.touched.description && formik.errors.description ? (
        <div style={{ color: 'red' }}>{formik.errors.description}</div>
      ) : null}
          <Button type="submit">Отправить форму</Button>
          <Button onClick={handleFeedClose}>Закрыть</Button>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/">На главную</Link>
          </div>
        </div>
      </div>
    </form>
    </div>
    </Modal>
    </div>
  );
}

export default Feedback;
