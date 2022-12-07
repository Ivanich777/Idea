import { Button, Link } from '@mui/material';
// import img from './cool-background.png';
import { useNavigate } from 'react-router-dom';
import './reg.css';
import { Outlet, NavLink } from 'react-router-dom';

interface AuthlayputProps {
  children: React.ReactNode;
  handleSubmit: () => void;
  buttonTitle: string;
  title: string;
  href: string;
  linkTitle: string;
}

function AuthLayout(props: AuthlayputProps): JSX.Element {
  const { children, handleSubmit, buttonTitle, title, href, linkTitle } = props;

  return (
    <div className="top">
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '10%',
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
              boxShadow: '0 0 10px black',
              padding: '1.5rem',
              borderRadius: '20px',
              borderColor:'black'
            }}
          >
            <div>
              <h3 style={{ color: 'black', textAlign: 'center' }}>{title}</h3>
            </div>
            {children}
            <Button className="button" type="submit" style={{color:'black'}}>{buttonTitle}</Button>
            <div>
              <Link href={href}>{linkTitle}</Link>
              <Link href="/">На главную</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AuthLayout;
