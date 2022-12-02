import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../App/api';
import { RootState, useAppDispatch } from '../../store';

function Auth(): JSX.Element {
  const { name } = useParams();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');

  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  const [user, setUser] = useState('');
  


  // if (name === 'logout') {
  //   api[name]().then((res: Res) => res.message === 'Session destroy' && dispatch({ type: 'LOGOUT' }));
  // }

  const auth = (e: React.FormEvent): void => {
    e.preventDefault();
    if (name === 'registration') {
      api[name]({ login, email, password, checkedPassword }).then((res: Res) => {
        if (res.message === 'Пользователь с таким именем уже существует') {
          navigate('/auth/login');
        } else {
          dispatch({ type: 'REGA', payload: res });
          navigate('/');
        }
      });
    }
    // if (name === 'login') {
    //   api[name]({ login, email, password, checkedPassword }).then((res: Res) => {
    //     if (res.message === 'Пользователя с таким именем не существует') {
    //       navigate('/auth/registration');
    //     } else {
    //       dispatch({ type: 'REGA', payload: res });
    //       navigate('/');
    //     }
    //   });
    }
  };

  return (
    <div className="main_container">
      <h2>{name?.toUpperCase()}</h2>
      <div className="form_container">
        <form onSubmit={auth}>
          {name === 'registration' && (

              <label className="form_label">
                Login<br />
                <input
                  onChange={(e) => setLogin(e.target.value)}
                  value={login}
                  name="login"
                  type="text"
                  className="form-control"
                />
              </label>

          )}

            <label className="form_label">
              Email
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                className="form-control"
              />
            </label>

            <label className="form-label">
              Password
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                type="password"
                className="form-control"
              />
            </label>

          {name === 'registration' && (
            <div className="mb-3">
              <label className="form-label">
                CheckedPassword
                <input
                  onChange={(e) => setCheckedPassword(e.target.value)}
                  value={checkedPassword}
                  name="checkedPassword"
                  type="password"
                  className="form-control"
                />
              </label>
            </div>
          )}

          <button className="btn btn-secondary" type="submit" >
            {name?.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
function useSelector(arg0: (state: RootState) => any): { users: any; } {
  throw new Error('Function not implemented.');
}

