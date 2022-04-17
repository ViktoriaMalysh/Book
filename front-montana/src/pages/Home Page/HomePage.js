import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";
import { connect, useDispatch, useSelector } from "react-redux";
// import { addTicket, showSaleTickets } from "../redux/actionTickets";
import { fetchVerifyToken } from "../../redux/actionUsers";
import { showSaleRooms } from "../../redux/actionTickets";
import { StyleRoot } from "radium";
import CarouselSale from "./components/CarouselSale";
import About from "./components/About";
import "react-multi-carousel/lib/styles.css";
import "./homePage.css";
import DeliciousFood from "./components/DeliciousFood";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Rooms from "./components/Rooms";
import Links from "./components/Links";
import { styles } from "../../animation/styles";

function Home() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchVerifyToken(token));
    // dispatch(showMyTickets(store.users.userId));
    dispatch(showSaleRooms());
    // console.log("store.tickets", store.tickets);
  }, []);

  return (
    <StyleRoot>
      <div className="div-home">
        <div className="home">
          <div className="div-home-slider">
            <Slider />
          </div>

          {/* first page */}
          <About />

          {/* second page */}
          <CarouselSale />

          {/* 3 page */}
          <Video />

          {/* 4 page */}
          <DeliciousFood />

          {/* 5 page */}
          <Rooms />

          {/* 6 page */}
          <Links />

          {/* footer */}
          <div className="div-8-end" style={styles.bounce}>
            <Footer />
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

const mapDispatchToProps = {
  // addTicket,
  // showTickets,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
