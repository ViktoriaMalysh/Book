import { useEffect, useState } from "react";
import { Dropdown, Icon, Rating } from "semantic-ui-react";
import "./cards.css";
import { useSelector, useDispatch, connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";

const stateOptions = [
  { key: "angular", text: "BEST_SELLER", value: "BEST_SELLER" },
  {
    key: "angular",
    text: "STAR_RATING_HIGHEST_FIRST",
    value: "STAR_RATING_HIGHEST_FIRST",
  },
  {
    key: "angular",
    text: "STAR_RATING_LOWEST_FIRST",
    value: "STAR_RATING_LOWEST_FIRST",
  },
  {
    key: "angular",
    text: "DISTANCE_FROM_LANDMARK",
    value: "DISTANCE_FROM_LANDMARK",
  },
  { key: "angular", text: "GUEST_RATING", value: "GUEST_RATING" },
  { key: "angular", text: "PRICE_HIGHEST_FIRST", value: "PRICE_HIGHEST_FIRST" },
  { key: "angular", text: "PRICE", value: "PRICE" },
];

function CardsRoom() {
  // const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <div className="div-cards">
      <div className="div-cards-header-title">
        <div className="div-cards-header-title">Showing 1-10 of 50 Results</div>
      </div>

      <div className="div-cards-header-sort">
        <div className="div-cards-header-sort">
          <Dropdown
            placeholder="State"
            search
            selection
            options={stateOptions}
          />
        </div>
      </div>

      {store.tickets.showRooms.map((item) => (
        <div className="div-cards-item">
          <img
            src={item.optimizedThumbUrls.srpDesktop}
            className="img-cards-item"
          />

          <div className="cards-block1">
            <div>
              {" "}
              <span>
                <Icon name="clock outline" />
                {store.tickets.days}D/{store.tickets.nights}N |
              </span>
              <span>
                {" "}
                <Icon name="users" /> 7 Person |
              </span>
              <span>
                {" "}
                <Icon name="point" /> {item.address && item.address.locality}
              </span>
            </div>
          </div>
          <div className="div-cards-block2">
            <div className="cards-item-title">
              <span>{item.name}</span>
            </div>
            <div className="cards-item-rating">
              <Rating
                icon="star"
                className="star-rating"
                size="huge"
                defaultRating={item.starRating}
                maxRating={5}
                disabled
              />{" "}
              ({item.guestReviews && item.guestReviews.total} Reviews)
            </div>
          </div>
          <div className="cards-line" />

          <div className="cards-item-footer">
            <div className="cards-item-footer-price">
              <span className="span-cards-footer-price">
                $
                {item.ratePlan &&
                  item.ratePlan.price &&
                  item.ratePlan.price.exactCurrent}
              </span>{" "}
              /per person
              <button
                className="button-cards-item-book"
                onClick={()=>navigate(`/single_room/${item.id}`)}
              >
                Book Now <Icon name="arrow right" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsRoom;
