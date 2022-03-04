import React, { useEffect, useState } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./profileSettings.css";
import PublicProfile from "../components/PublicProfile";
import HistoryTransaction from "../components/HistoryTransaction";
import BookedRooms from "../components/BookedRooms";
import BoughtRooms from "../components/BoughtRooms";
import NavBarBasket from "../components/NavBarBasket";

function Basket() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleChange = () => {
    setShow(false);
  };

  return (
    <div className="div-change-profile">
      <div className="div-prof-sett-block1">
        <img
          alt="Avatar"
          className="img-avatar-block1"
          src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        />
        <div className="div-block1-title">
          <p className="p-block1-title">
            {store.users.userName} {store.users.userSurname}
          </p>
          <p className="p-block1-text">Your personal account</p>
        </div>
      </div>

      <button
        className="button-prof-sett-block1"
        onClick={() => navigate("/tickets")}
      >
        Go To Room List
      </button>
      <div className="div-basket-settings">
        <nav className="nav-basket">
          <NavBarBasket />
        </nav>
        <Routes>
          <Route path="bookedRooms" element={<BookedRooms />} />
          <Route path="boughtRooms" element={<BoughtRooms />} />
          <Route path="history" element={<HistoryTransaction />} />
        </Routes>
        {/* <PublicProfile /> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps)(Basket);
