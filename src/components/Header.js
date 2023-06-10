import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  // let btnName = "login";
  let count = 0;
  const [btnName, setBtnName] = useState("Login");

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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
