import React from "react"
import AssignmentIcon from '@material-ui/icons/Assignment';


function Header() {
    return <header>
        <h1 className="brand">
            <span>
                <AssignmentIcon fontSize="large" />
            </span>
            Keeper
        </h1>
    </header>
}

export default Header;
