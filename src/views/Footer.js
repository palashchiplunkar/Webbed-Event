import React from 'react';

import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"
export default function Footer() {
    return (
        <div style={{ position: "absolute", bottom: "0", marginLeft: "40%", display: "flex" }}>
            <p style={{ color: "white", textAlign: "center" }}>Contact us At : </p>
            <div>
                <AiFillFacebook style={{ color: "white" }} />
            </div>
            <div>
                <AiFillInstagram style={{ color: "white" }} />
            </div>
            <div>
                <AiOutlineWhatsApp style={{ color: "white" }} />
            </div>
            <div>
          <p style={{color:"white",display:"block"}}>CopyRight PhotoGallery.com</p>
            </div>
        </div>
    );
}
