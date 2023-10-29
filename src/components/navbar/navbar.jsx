import { useState } from "react";

import MicoLogo from "../../assets/images/logo.png"

import { Button, Menu, MenuItem } from "@mui/material";

import { Person, Search, Menu as MenuIcon } from "@mui/icons-material";
import "./navbar.scss"

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <nav>
            <div className="nav-left">
                <img src={MicoLogo} alt="Mico Logo" />
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>TREATMENT</li>
                    <li>DOCTORS</li>
                    <li>TESTIMONIAL</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className="menu">
                <Button
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="MenuButton">

                    <MenuIcon className="MenuIcon" />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                    className="MenuItems">

                    <MenuItem onClick={handleClose} className="MenuItem" >HOME</MenuItem>
                    <MenuItem onClick={handleClose} className="MenuItem" >ABOUT</MenuItem>
                    <MenuItem onClick={handleClose} className="MenuItem">TREATMENT</MenuItem>
                    <MenuItem onClick={handleClose} className="MenuItem" >DOCTORS</MenuItem>
                    <MenuItem onClick={handleClose} className="MenuItem" >TESTIMONIAL</MenuItem>
                    <MenuItem onClick={handleClose} className="MenuItem">CONTACT US</MenuItem>
                    <MenuItem onClick={handleClose} className="MenuItem">
                        <Person className="PersonIcon1" /> LOGIN
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="MenuItem">
                        <Person className="PersonIcon2" />SIGNUP
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="MenulItem">
                        <Search className="SearchIcon" />
                    </MenuItem>
                </Menu>
            </div>
            <div className="nav-right">
                <Button className="btn-login" variant="text">
                    <Person /> LOGIN
                </Button>
                <Button className="btn-signup" variant="text">
                    <Person />SIGNUP
                </Button>
                <Button className="btn-search" variant="text" >
                    <Search />
                </Button>
            </div >
        </nav >
    )
}