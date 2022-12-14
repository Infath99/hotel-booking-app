
import React from 'react'
import './navBar.css'



function NavBar() {
    return (
        <div className="navBar">
            <div className="navContainer">
                <span className="logo">Trippy Booking</span>
                <div className="navItem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
