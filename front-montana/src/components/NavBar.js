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
      <Menu pointing vertical>
        <Menu.Item
          icon="user"
          name="account"
          className="claim_Card"
          active={activeItem === "account"}
          onClick={(e) => handleItemClick(e.target.name)}
        />
        <Menu.Item   
          name="messages"
          active={activeItem === "messages"}
          onClick={(e) => handleItemClick("messages")}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={(e) => handleItemClick(e.target.name)}
        />
      </Menu>

      {/* <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/settings/profile"}
        >
          <Icon className="icon-nav" name="user" />
          <div className="div-between" />
          <div className="div-nav-link">Account</div>
        </Link>
      </div>

      <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/settings/account"}
        >
          <Icon name="key" />
          <div className="div-nav-link">Change Password</div>
        </Link>
      </div>

      <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/settings/email"}
        >
          <Icon name="envelope outline" />
          <div className="div-nav-link">Change Email</div>
        </Link>
      </div>

      <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/settings/phone"}
        >
          <Icon name="phone" />
          <div className="div-nav-link">Phone</div>
        </Link>
      </div>

      <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/settings/cards"}
        >
          <Icon name="credit card" />
          <div className="div-nav-link">Payment card</div>
        </Link>
      </div>

      <div className="nav-link-profile">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/settings/cards"}
        >
          <Icon name="user delete" />

          <div className="div-nav-link">Delete Account</div>
        </Link>
      </div> */}
    </>
  );
}

export default NavBar;
