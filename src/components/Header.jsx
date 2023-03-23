import React from "react";
import search from "../assets/images/icons/search.svg";
import user from "../assets/images/icons/user.svg";
import cart from "../assets/images/icons/cart.svg";
const Header = () => {
  const menus = ["home +", "abouse us +", "products +", "blog +", "contacts +"];
  return (
    <header className="header-section">
      <div
        className="container header-container"
        data-aos="fade-down"
        data-aos-delay="700"
        data-aos-duration="1200"
      >
        {/*------------ logo -------- */}
        <div className="logo">
          <h2 className="font-inter">logo</h2>
        </div>
        {/*------------ navigation -------- */}
        <div className="menu">
          <ul>
            {menus.map((menu, i) => (
              <li key={i} className="font-inter">
                {menu}
              </li>
            ))}
          </ul>
        </div>
        {/*------------ header icons -------- */}
        <div className="social-icons">
          <ul>
            <li>
              <img src={search} alt="" />
            </li>
            <li>
              <img src={user} alt="" />
            </li>
            <li>
              <img src={cart} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
