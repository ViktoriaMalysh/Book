import Footer from "../../components/footer/Footer";
import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import React from "react";
import Slider from "./PriceRange";
import "./rooms.css";
import SearchTours from "./SearchTours";
import Category from "./Category";
import StarRating from "./Rating";
import Advertising from "./Advertising";
import Cards from "./Cards";

function Rooms() {
  return (
    <StyleRoot>
      <div className="div-rooms">
        <div className="div-rooms-header">
          <p className="p-rooms-title" style={styles.fadeInDown2s}>
            Rooms{" "}
          </p>
        </div>

        <div className="div-rooms-block">
          <div className="div-rooms-search">
            <SearchTours />
          </div>
          <div className="div-rooms-title">Showing 1-10 of 50 Results</div>
          <div className="div-rooms-sort">SORT</div>
          <div className="div-rooms-category">
            <Category />
          </div>

          <div className="div-rooms-price-range">
            <span className="span-rooms-title">Price Range</span>
            <div className="div-rooms-search-block1">
              <Slider min={1} max={150} />
            </div>
          </div>
          <div className="div-rooms-rating">
            <StarRating />
          </div>
          <div className="div-rooms-advertising">
            <Advertising/>
          </div>
          <div className="div-rooms-cards">
            <Cards/>
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
