import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";

export class Nav extends React.Component{

    render() {
        return(

        <header>
            <div className="topNav" id="myTopNav">
            <Navbar>
            <NavItem>
                <Link to = "/About">About Me</Link>
            </NavItem>
            <NavItem>
                <Link to ='/Todos' >Things To DO</Link>
            </NavItem>
            </Navbar>
            </div>
        </header>
        )
    }
}