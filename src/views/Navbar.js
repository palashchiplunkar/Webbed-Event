import React from 'react'
import "../css/navbar.css"
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className='nav-container'>
            <h1>
                PhotoGallery
            </h1>
            <ul>
                <li>
                    <Link to={"/"} style={{textDecoration:"none",color:"white"}}>Home</Link>
                    
                </li>
                <li>
                    About
                </li>
                <li>
                <Link to={"/gallery"} style={{textDecoration:"none",color:"white"}}>Gallery</Link>
                </li>
                <li>
                Login
                </li>

            </ul>
        </nav>

    )
}
