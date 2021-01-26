import React, { Component } from 'react';

import '../../css/navbar.css';
import MenuItems from './MenuItems';
import logoImg from '../../image/Logo_title.png';
// import { FaBars, FaTimes } from 'react-icons/fa';


class Navbar extends Component {

  // state = { clicked: false };

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // }

  render() {
    return (
      <nav className="NavbarItems">
        <img src={logoImg} alt="" className="navbar-logo" />
        {/* <div className="menu-icon" onClick={this.handleClick}>
          <div className={this.state.clicked ? <FaBars /> : <FaTimes />}></div>
        </div> */}
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <li></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;