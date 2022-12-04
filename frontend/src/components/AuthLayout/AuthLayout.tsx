import { Button, Link } from "@mui/material";
import img from "./cool-background.png";
interface AuthlayputProps {
  children: React.ReactNode;
  handleSubmit: () => void;
  buttonTitle: string;
  title: string;
  href: string;
  linkTitle: string;
}

export const Authlayput = (props: AuthlayputProps) => {
  const { children, handleSubmit, buttonTitle, title, href, linkTitle } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: '100vh'
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "300px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "450px",
              height: "fitContent",
              background: "white",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              padding: "1.5rem",
              borderRadius: "20px",
            }}
          >
            <div>
              <h3 style={{ color: "#67c1ff" }}>{title}</h3>
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
};
