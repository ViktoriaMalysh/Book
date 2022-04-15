import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { fetchVerifyToken } from "../redux/actionUsers";
import { Icon, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router";

// import { showMyTickets } from "../redux/actionTickets";
// import { showSaleTickets } from "../redux/actionTickets";
import "./header.css";
import "./slider.css";


function Header() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();

  const handleItemClick = (name) => setActiveItem(name);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchVerifyToken(token));
    // dispatch(showMyTickets(store.users.userId));
    // dispatch(showSaleTickets());
  }, []);

  return (
    <div className="div-slider-header align-div ">
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
          <Link to="/">
            <div
              className="div-menu-item22"
              onClick={() => handleItemClick("rooms")}
            >
              <span className="p-item"> Rooms</span>
              <div className="div-line-item" hidden={activeItem !== "rooms"} />
            </div>
          </Link>
          <Link to="/">
            <div
              className="div-menu-item33"
              onClick={() => handleItemClick("about")}
            >
              <span className="p-item"> About</span>
              <div className="div-line-item" hidden={activeItem !== "about"} />
            </div>
          </Link>
          <Link to="/">
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

      {/* </div> */}
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
              MONTANA
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Country"
                id="collasible-nav-dropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/country/italy"
                  >
                    Italy
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/country/turkey"
                  >
                    Turkey
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/country/germany"
                  >
                    Germany
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/country/france"
                  >
                    France
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/country/egypt"
                  >
                    Egypt
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/country/greece"
                  >
                    Greece
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    style={{ textDecoration: "none", color: "black" }}
                    to="/country/spain"
                  >
                    Spain
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/tickets"}
                >
                  Rooms
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/sale"}
                >
                  Sale
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/"}
                >
                  About Us
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/"}
                >
                  Our Offers
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/"}
                >
                  Delicious Food
                </Link>
              </Nav.Link>

              <Nav.Link>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="#featuredRooms"
                >
                  Featured Rooms
                </a>
              </Nav.Link>
            </Nav>
            <Nav>
              {store.users.isAuth ? (
                <>
                  <NavDropdown
                    title={store.users.userName}
                    id="collasible-nav-dropdown"
                    style={{ color: "white" }}
                  >
                    <NavDropdown.Item>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/profile"}
                      >
                        Profile
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/logout"}
                      >
                        Log Out
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={"/basket"}
                    >
                      <Figure.Image
                        width={31}
                        height={40}
                        alt="171x180"
                        src="https://cdn-icons.flaticon.com/png/512/4647/premium/4647563.png?token=exp=1645621653~hmac=6da9ebcc9df28e104d24978ae9ebd865"
                      />
                    </Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={"/sign_in"}
                    >
                      Sing In
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={"/sign_up"}
                    >
                      Sing Up
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default Header;
