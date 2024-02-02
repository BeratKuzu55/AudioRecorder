import React from "react";


const year = new Date().getFullYear();

function Footer(){
    return <footer>
        <p>Copyright Berat Kuzu {year}.</p>
    </footer>
}

export default Footer;