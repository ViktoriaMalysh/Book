import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { fetchVerifyToken } from "../redux/actionUsers";
import { Icon, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router";
import { slideInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "react-multi-carousel/lib/styles.css";
// import { showMyTickets } from "../redux/actionTickets";
// import { showSaleTickets } from "../redux/actionTickets";
import "./header.css";
import { styles } from "../animation/styles";

function Header() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();
  const handleItemClick = (name) => setActiveItem(name);

  const [headerShow, setHeaderShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [headerShow]);

  const handleScroll = () => {
    window.scrollY > 0 ? setHeaderShow(true) : setHeaderShow(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchVerifyToken(token));
    // dispatch(showMyTickets(store.users.userId));
    // dispatch(showSaleTickets());
  }, []);

  return (
    <StyleRoot>
      <div
        className="div-slider-header align-div"
        style={{ background: headerShow ? "#212529" : "transparent" }}
        // style={styles.fadeInDown2s}
      >
        <div className="div-slider-nav">
          <div className="div-menu">
            <Link to="/">
              <div
                className="div-menu-item11"
                onClick={() => handleItemClick("home")}
              >
                Home
                <div className="div-line-item" hidden={activeItem !== "home"} />
              </div>
            </Link>
            <Link to="/rooms">
              <div
                className="div-menu-item22"
                onClick={() => handleItemClick("rooms")}
              >
                <span className="p-item"> Rooms</span>
                <div
                  className="div-line-item"
                  hidden={activeItem !== "rooms"}
                />
              </div>
            </Link>
            <Link to="/about">
              <div
                className="div-menu-item33"
                onClick={() => handleItemClick("about")}
              >
                <span className="p-item"> About</span>
                <div
                  className="div-line-item"
                  hidden={activeItem !== "about"}
                />
              </div>
            </Link>
            <Link to="/contact">
              <div
                className="div-menu-item44"
                onClick={() => handleItemClick("contact")}
              >
                <span className="p-item"> Contact</span>
                <div
                  className="div-line-item"
                  hidden={activeItem !== "contact"}
                />
              </div>
            </Link>{" "}
          </div>
        </div>
        <img
          className="img-montana"
          src="data:image/webp;base64,UklGRoICAABXRUJQVlA4THUCAAAvb8AWEI8w//M//0obSYGzuLvjVTj6IWB/HBaEMCgkAoJDIASAAGjbtlU1tia4EQkuYPz/57pQk5TnWg8R/Z8AfeafT9XP+Uef+VsE1DOGPQFhtvAIg21WxyPY6JNAfYbC6hXSM0TM603PoEo8ZPJTJOqhDT2F2ghSojxHJkuV+BwaXZGqBymkQnqSSO1NT6IK+VkSQ8+iVh7jnb+qfOoP8tsjkM8F4Mezc+UJSKfG+Jjw6t/SqGcy7WMSfMsG8USn/nypU2aJnh4gM2Y75UzeB/QaPaNoNejlYPhFUtgMsNVJoFA77IsXNgNsPaNB9iKEWTCmeVZx7Urs+GWyDNx0iB2/nCk0r1I1a4wcpLjD6rWxSaFClqQEchN7kkKF6DWLUhr0Q2JPUqgQT0RIhzBYZpmxyN3pHquOnf1KltvZJjpmWA5Zbmc7oUo9FEyzxkt+hOQ0uYV+YW4Ub3UEWWeNcmaBKKmznoA0UaM4xUtwKaylWmcm3yhOWEu1zjkZRcp0zRJobu8KleMYN4XKcYwLmSEZ23cY47Uukt1kjNe6SHZBnbwwwokAadbY3rJC1PGmFaKOlwpWqTqhTplEWN5SMLn9noLJ7VfCYBBPFcbi7ZjuCl5zNu5qzsYVVdh1KjRGDlLcGcs9AV6HBK+gsDHuSfAKChvjUoR0TqHhj0X3aAcoUsV92T2quC+7JOu6IGUDWgm6K9TByJJKg7bqLpUGbdXsV/kKxGdJSvXD+vfl4mXIXoXodcieVZwO8bugyo0mda9rWrPEpMjv+u6a1L0EEJ1E8UxSjV78OXJxoulsSU7NEvpx1PNBBcyDLr9DumTEr/onFgA="
        ></img>
        <div className="div-slider-icon">
          <base target="_blank"></base>
          <a href="https://www.instagram.com/" className="img-icon1">
            <Icon name="instagram" />
          </a>

          <base target="_blank"></base>
          <a href="https://uk-ua.facebook.com/" className="img-icon2">
            <Icon name="facebook" />
          </a>

          <base target="_blank"></base>
          <a href="https://twitter.com/" className="img-icon3">
            <Icon name="twitter" />
          </a>
        </div>
        {store.users.isAuth ? (
          <button
            className="button-booking"
            onClick={() => navigate("/tickets")}
          >
            Book A Room
          </button>
        ) : (
          <div className="div-header-button-auth">
              <button
                className="header-button-auth"
                onClick={() => navigate("/sign_in")}
              >
              <div className="div-button">
                <Icon name="sign-in" />
                Sign In
              </div>
            </button>

              <button
                className="header-button-auth"
                onClick={() => navigate("/sign_up")}
              >
              <div className="div-button">
                <Icon name="sign-out" />
                Sign Up
              </div>
            </button>
          </div>
        )}
      </div>
    </StyleRoot>
  );
}

export default Header;
