import { Link } from "react-router-dom";
import FooterLine from "./FooterLine";

function Footer() {
  return (
    <>
      <div className="div-8-block1">
        <p className="p-8-title">Address</p>
        <p className="p-8-text">200, Green road, Mongla, New Yor City USA</p>
      </div>
      <div className="div-8-block2">
        <p className="p-8-title">Reservation</p>
        <p className="p-8-text">+10 367 267 2678 reservation@montana.com</p>
      </div>
      <div className="div-8-block3">
        <p className="p-8-title">Navigation</p>
        <Link className="p-8-text-link" to="/">
          Home
        </Link>
        <br />
        <Link className="p-8-text-link" to="/tickets">
          Rooms
        </Link>
        <br />
        <Link className="p-8-text-link" to="/">
          Sale
        </Link>
      </div>

      <div className="div-8-block4">
        <img
          style={{ width: "100%", marginLeft: "0em", height: "100%" }}
          src="https://pngimg.com/uploads/seashell/seashell_PNG84.png"
        />
      </div>
      <FooterLine />
      </>
  );
}

export default Footer;