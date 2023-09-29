import React, { Component } from 'react'
import { Link } from 'react-router-dom';

var classes = 'navlinks';

export default class Navbar extends Component {
  state: {
    navlink: boolean;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      navlink: false,
    }
  }

  navlinkToggle = () => {
    this.setState({
      navlink: !this.state.navlink
    })
  }

  render() {
    return (
      <nav className="navBar">
        <div className="logo">
          <i className="fa-solid fa-mountain fa-spin fa-spin-reverse"></i>
          <h4>Mountains</h4>
        </div>
        <ul className={this.state.navlink ? 'navlinks active' : 'navlinks '}>
          <li>
            <Link className="links" to="/">Home</Link>
          </li>
          <li>
            <Link className="links" to="/about">About</Link>
          </li>
          <li>
            <Link className="links" to="/services">Services</Link>
          </li>
          <li>
            <Link className="links" to="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={this.navlinkToggle} className="hamburger-toggle">
          <i className="fa-solid fa-bars fa-lg"></i>
        </div>
      </nav>
    )
  }
}
