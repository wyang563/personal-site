import React, {useEffect, useState} from 'react';
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link, useLocation } from "@reach/router";
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="NavBar-container">
            <div className="NavBar-title u-inlineBlock">William Yang</div>
            <div className="NavBar-linkContainer u-inlineBlock">
            <Link to="/" className="NavBar-link">
                Home
            </Link>
            <Link to="/blog" className="NavBar-link"> Blog</Link>
        </div>
      </nav>
    )
    }

export default Navbar;