import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../store';
import { logout } from "../authSlice";
import { useEffect } from 'react';

function Logout():JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
useEffect(()=>{
  dispatch(logout());
  navigate("/");
},[])
  return (
    <></>
  )
}

export default Logout
