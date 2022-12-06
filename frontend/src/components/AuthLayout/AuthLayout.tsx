import { Button, Link } from '@mui/material';
// import img from './cool-background.png';

interface AuthlayputProps {
  children: React.ReactNode;
  handleSubmit: () => void;
  buttonTitle: string;
  title: string;
  href: string;
  linkTitle: string;
}

function Authlayput(props: AuthlayputProps):JSX.Element {
  const { children, handleSubmit, buttonTitle, title, href, linkTitle } = props;

  return (
    <div
      style={{
        background: '#FDCA90',
        background: '-moz-linear-gradient(top, #FDCA90 0%, #5A341C 0%, #F3C28A 100%)',
        background: '-webkit-linear-gradient(top, #FDCA90 0%, #5A341C 0%, #F3C28A 100%)',
        background: 'linear-gradient(to bottom, #FDCA90 0%, #5A341C 0%, #F3C28A 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '100vh',
      }}
    >
      <form onSubmit={handleSubmit}>
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
              <h3 style={{ color: 'black', textAlign: 'center' }}>{title}</h3>
            </div>
            {children}
            <Button type="submit">{buttonTitle}</Button>

            <div>
              <Link href={href}>{linkTitle}</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Authlayput;
