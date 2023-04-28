import React from 'react'
import "../css/home.css"
import { Link,useNavigate } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='content-container'>
                <h1 className='content-heading'>Explore World of Photography</h1>
                <p className='content-para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <button className='content-button'>
                <Link to={"/gallery"} style={{textDecoration:"none",color:"white"}}>Explore Now</Link>

                </button>
            </div>
        </>
    )
}
