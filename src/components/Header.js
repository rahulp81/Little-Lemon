import Nav from "./Nav";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navigation">
          <Nav />
        </div>
      </div>
    </>
  );
}

