import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ROOM_DATA, SHOW_MODAL } from "../../../redux/types";
import ModalBookSaleRoom from "./ModalBookSaleRoom";
import "./carouselSale.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 476 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 476, min: 0 },
    items: 2,
  },
};

function CarouselSale() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  // Object.keys(ticket).length)

  const handleBook = (room) => {
    dispatch({ type: ROOM_DATA, payload: room });
    dispatch({ type: SHOW_MODAL, payload: true });
  };

  return (
    <div className="div-2-page">
      {store.saleRoom.show ? <ModalBookSaleRoom /> : <></>}
      <div className="div-2-title">
        <p className="p-2-title">Our Offers</p>
        <p className="p-2-name">Ongoing Offers</p>
      </div>
      <div className="div-block2">
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          autoPlay={true}
        >
          {store.tickets.showSale.map((item) => (
            <div className="div-2-sale-1">
              <img className="img-2-sale" src={item.url}></img>
              <p className="p-2-sale-title">
                Up to 35% savings on Club rooms and Suites
              </p>
              <p className="p-2-sale-text">&#8226; Luxaries condition</p>
              <p className="p-2-sale-text">
                &#8226; 3 Adults & 2 Children size
              </p>
              <p className="p-2-sale-text">&#8226; Sea view side</p>
              <p className="p-2-sale-text-2">
                Price Bofore: $ {item.priceBefore} (After $ {item.priceAfter})
              </p>
              <p className="p-2-sale-text">Discount: $ {item.discount}</p>
              {store.users.isAuth ? (
                <button
                  className="button-sale"
                  onClick={() => handleBook(item)}
                >
                  Book Now
                </button>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </Carousel>{" "}
      </div>
    </div>
  );
}
export default CarouselSale;
