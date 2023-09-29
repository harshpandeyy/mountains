import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
        <div className="container">
            <Navbar />
            <div className="main">
                <div className='body-content'>
                    <h2>Discover an Adventure</h2>
                    <h1>Travel the World</h1>
                    <p></p>
                    <div className="btn-container">
                        <Link className="services" to="/services">Services</Link>
                        <Link className="about" to="/about">About us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
