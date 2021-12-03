import React from "react"
import AssignmentIcon from '@material-ui/icons/Assignment';

function Header() {
    return <header>
        <h1 className="brand">
            <span><AssignmentIcon style={{ fontSize: "2rem", paddingTop: ".1rem"}} /></span>
            Keeper
        </h1>
    </header>
}

export default Header;
