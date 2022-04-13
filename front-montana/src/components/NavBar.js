import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import PublicEmail from "../settings/PublicEmail";
// import styles from "./NavBar.module.scss";
import "./navBar.css";

function NavBar() {
  // const classes = useStyles();
  const [activeItem, setActiveItem] = useState("account");

  const handleItemClick = (name) => {
    setActiveItem(name);
    console.log("Name:", name);
  };

  return (
    <>
      {/* <Menu pointing vertical>
        <Menu.Item
          icon="user"
          name="account"
          // className="claim_Card"
          // style={{ background: "aqua" }}
          onmouseover={{ background: "black" }}
          onmouseout={{ background: "#333" }}
          active={activeItem === "account"}
          onClick={() => handleItemClick("account")}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={() => handleItemClick("messages")}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={() => handleItemClick("friends")}
        />
      </Menu> */}

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/settings/profile"}
      >
        <div className="nav-link-profile">
          <Icon className="icon-nav" name="user" />
          <div className="div-between" />
          <div className="div-nav-link">Account</div>
        </div>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/settings/account"}
      >
        <div className="nav-link-profile">
          <Icon className="icon-nav" name="key" />
          <div className="div-between" />
          <div className="div-nav-link">Change Password</div>
        </div>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/settings/email"}
      >
        <div className="nav-link-profile">
          <Icon className="icon-nav" name="envelope outline" />
          <div className="div-between" />
          <div className="div-nav-link">Change Email</div>
        </div>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/settings/phone"}
      >
        <div className="nav-link-profile">
          <Icon className="icon-nav" name="phone" />
          <div className="div-between" />
          <div className="div-nav-link">Phone</div>
        </div>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/settings/cards"}
      >
        <div className="nav-link-profile">
          <Icon className="icon-nav" name="credit card" />
          <div className="div-between" />
          <div className="div-nav-link">Payment card</div>
        </div>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/settings/cards"}
      >
        <div className="nav-link-profile">
          <Icon className="icon-nav" name="user delete" />
          <div className="div-between" />
          <div className="div-nav-link">Delete Account</div>
        </div>
      </Link>
    </>
  );
}

export default NavBar;
