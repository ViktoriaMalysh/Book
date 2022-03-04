import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { REQUESTED_SUCCEEDED_CLOSE_USER } from "../redux/types";
import { fetchVerifyToken } from "../redux/actionUsers";
import { showMyTickets } from "../redux/actionTickets";
import { showSaleTickets } from "../redux/actionTickets";

function Header() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchVerifyToken(token));
    dispatch(showMyTickets(store.users.userId));
    dispatch(showSaleTickets());

    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_USER });
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/login"}
                  >
                    Sing In
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
