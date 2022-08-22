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
            <Link to="/blog" className="NavBar-link"> Blog/Research</Link>
            <Link to="/projects" className="NavBar-link">
                Projects
            </Link>
            <Link to="/experience" className="NavBar-link">
                Experience
            </Link>
        </div>
      </nav>
    )
    }

export default Navbar;