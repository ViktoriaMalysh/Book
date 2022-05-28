import Footer from "../../components/footer/Footer";
import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import React, { useEffect } from "react";
import Slider from "./PriceRange";
import "./rooms.css";
import SearchTours from "./SearchTours";
import Category from "./Category";
import StarRating from "./Rating";
import Advertising from "./Advertising";
import CardsRoom from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Rooms() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    console.log("length", store.tickets.showRooms.length);
  }, [store.tickets.showRooms]);

  return (
    <StyleRoot>
      <div className="div-rooms">
        <div className="div-rooms-header">
          <p className="p-rooms-title" style={styles.fadeInDown2s}>
            Rooms{" "}
          </p>
        </div>

        <div className="div-rooms-block">
          <div className="div-rooms-filter">
            <div className="div-rooms-search">
              <SearchTours />
            </div>
            <div className="div-rooms-category">
              <Category />
            </div>
            <div className="div-rooms-price-range">
              <span className="span-rooms-title">Price Range</span>
              <div className="div-rooms-search-block1">
                <Slider min={1} max={500} />
              </div>
            </div>
            <div className="div-rooms-rating">
              <StarRating />
            </div>
            <div className="div-rooms-advertising">
              <Advertising />
            </div>
          </div>

          <div className="div-rooms-cards">
            {store.tickets.showRooms.length !== 1 ? (
              <CardsRoom />
            ) : (
              <>
                {" "}
                <div className="cards-spinner">
                  <Spinner animation="border" variant="info" />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="div-faq-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Rooms;
