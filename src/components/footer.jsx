import React from "react"

let date = new Date();

const year = date.getFullYear();

function Footer() {
    return <footer>
        <p>Copyright&copy;{year}</p>
    </footer>
}

export default Footer;