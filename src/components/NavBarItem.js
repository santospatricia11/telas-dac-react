import React from "react";
import 'bootswatch/dist/darkly/bootstrap.css';

function NavBarItem(prosp){
    return(
        <li className="nav-item">
            <a className="nav-link" > {prosp.label}</a>
        </li>
    )
}
export default NavBarItem;