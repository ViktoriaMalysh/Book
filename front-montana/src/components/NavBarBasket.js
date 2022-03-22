import { Link } from "react-router-dom";
import PublicEmail from "../settings/PublicEmail";

function NavBarBasket() {
  return (
    <>
      <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/basket/bookedRooms"}
        >
          <div className="div-nav-link">Booked Rooms</div>
        </Link>
      </div>

      <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/basket/boughtRooms"}
        >
          <div className="div-nav-link">Bought Rooms</div>
        </Link>
      </div>

      <div className="div-border"></div>
      <p className="p-prof-sett-title">Payments</p>

      <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/basket/history"}
        >
          <div className="div-nav-link">Transaction History</div>
        </Link>
      </div>
    </>
  );
}

export default NavBarBasket;
