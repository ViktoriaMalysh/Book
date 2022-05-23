import { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import "./cards.css";
import { useSelector, useDispatch, connect } from "react-redux";

function CardsRoom() {
  // const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  return (
    <div className="div-cards">
      <div className="div-cards-header-title">
        <div className="div-cards-header-title">Showing 1-10 of 50 Results</div>
      </div>

      <div className="div-cards-header-sort">
        <div className="div-cards-header-sort">SORT</div>
      </div>

      {store.tickets.showRooms.map((item) => (
        <div className="div-cards-item">
          <img
            src={item.optimizedThumbUrls.srpDesktop}
            className="img-cards-item"
          />
          <span className="cards-item-title">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CardsRoom;
