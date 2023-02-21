import React from 'react'
import { Link } from 'react-router-dom'

import bg from '../../assets/images/footer_bg.png'
const Footer = () => {
  return (
    <footer className="footer"
        style={{backgroundImage: `url(${bg})`}}
    >
        <div className="container">
            <div className="footer-title">
                <h1>Movi<span>e+</span></h1>
            </div>
            <div className="footer-container">
            
            <ul className="footer-menu">
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Movie</Link>
                </li>
                <li>
                    <Link>TV Series</Link>
                </li>
            </ul>
            <ul className="footer-menu">
                <li>
                    <Link>Live</Link>
                </li>
                <li>
                    <Link>FAQ</Link>
                </li>
                <li>
                    <Link>Term of services</Link>
                </li>
                <li>
                    <Link>About us</Link>
                </li>
                <li>
                    <Link>Privacy policy</Link>
                </li>
            </ul>
            <ul className="footer-menu">
                <li>
                    <Link>Must Watch</Link>
                </li>
                <li>
                    <Link>Release</Link>
                </li>
                <li>
                    <Link>Up coming</Link>
                </li>
                <li>
                    <Link>Top IMDB</Link>
                </li>
            </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer