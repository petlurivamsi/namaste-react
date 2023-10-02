import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "login";
  let count = 0;
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

  useEffect(() => {
    console.log("Header rendered");
  });

  /*btnName when re-rendered after it changes, the btnName gets updated with the new value provided from setBtnName.
    As the page is re-rendered after state change, the btnName is declared with Logout value.
  */
  return (
    //Whenever the state value changes, this component gets re-rendered again.

    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        {console.log("Near UL", count)}
        <ul>
          <li>Online status:{isOnline === true ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
