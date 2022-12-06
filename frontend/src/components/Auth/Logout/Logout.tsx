import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { logout } from '../authSlice';

function Logout():JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
useEffect(() => {
  dispatch(logout());
  navigate('/');
}, []);

  return (
    <></>
  );
}

export default Logout;
