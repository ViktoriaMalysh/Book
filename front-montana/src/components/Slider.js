import React from "react";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Header from "./Header";
import Carousel from "react-multi-carousel";
import { Button as ButtonSemantic, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 476 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 476, min: 0 },
    items: 1,
  },
};

export default function Slider() {
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      draggable={true}
      autoPlay={true}
    >
      <div className="div-carousel-item1">
        {/* <div className="div-slider-header">
          <div className="div-slider-nav">
            <Header />
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
              <button className="header-button-auth">
                <div className="div-button">
                  <Icon name="sign-in" />
                  Sign In
                </div>
              </button>

              <button className="header-button-auth">
                <div className="div-button">
                  <Icon name="sign-out" />
                  Sign Up
                </div>
              </button>
            </div>
          )}
        </div> */}

        <div className="div-page">
          <h1 className="h-slider-title">Montana Resort</h1>
          <p className="p-slider-title">
            Unlock to enjoy the view of Montana
          </p>{" "}
        </div>
      </div>
      <div className="div-carousel-item2">
        {/* <div className="div-slider-header">
          <div className="div-slider-nav">
            <Header />
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
              <button className="header-button-auth">
                <div className="div-button">
                  <Icon name="sign-in" />
                  Sign In
                </div>
              </button>

              <button className="header-button-auth">
                <div className="div-button">
                  <Icon name="sign-out" />
                  Sign Up
                </div>
              </button>
            </div>
          )}
        </div> */}

        <div className="div-page">
          <h1 className="h-slider-title">Life Is Beautiful</h1>
          <p className="p-slider-title">
            Unlock to enjoy the view of Montana
          </p>{" "}
        </div>
      </div>
    </Carousel>
  );
}
