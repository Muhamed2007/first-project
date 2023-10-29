import "./footer.scss"
import MicoLogo from "../../assets/images/logo.png"
import * as React from 'react';
import { Button } from "@mui/material";
import Post1 from "../../assets/images/post1.jpg"
import Post2 from "../../assets/images/post2.jpg"
import Post3 from "../../assets/images/post3.jpg"
import Post4 from "../../assets/images/post4.png"
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
export const Footer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <div className="footer">
            <div className="top">
                <img src={MicoLogo} alt="" />
                <div className="email-input">

                    <div className="input-cont">
                        <input type="text" placeholder="Your email" />
                        <Button>SUBSCRIBE</Button>
                    </div>



                    <div className="linear"></div>
                </div>
            </div>
            <div className="center">
                <div className="address">
                    <h2 aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="MenuButton"><div className="square"></div> ADDRESS</h2>
                    <div className="address-info">
                        <ul>
                            <li>Location</li>
                            <li>Call +01 1234567</li>
                            <li>demo@gmail.com</li>
                        </ul>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                            className="MenuItems">

                            <MenuItem onClick={handleClose} className="MenuItem" >Home</MenuItem>
                            <MenuItem onClick={handleClose} className="MenuItem" >About</MenuItem>
                            <MenuItem onClick={handleClose} className="MenuItem">Treatment</MenuItem>
                            <MenuItem onClick={handleClose} className="MenuItem" >Doctors</MenuItem>
                            <MenuItem onClick={handleClose} className="MenuItem" >Testimonial</MenuItem>
                            <MenuItem onClick={handleClose} className="MenuItem">Contact us</MenuItem>
                        </Menu>
                        <div className="messengers"></div>
                    </div>
                </div>
                <div className="useful-link">



                    <h2
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="MenuButton"><div className="square"></div> USEFUL LINK</h2>


                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Treatment</li>
                        <li>Doctors</li>
                        <li>Testimonial</li>
                        <li>Contact Us</li>
                    </ul>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                        className="MenuItems">

                        <MenuItem onClick={handleClose} className="MenuItem" >Home</MenuItem>
                        <MenuItem onClick={handleClose} className="MenuItem" >About</MenuItem>
                        <MenuItem onClick={handleClose} className="MenuItem">Treatment</MenuItem>
                        <MenuItem onClick={handleClose} className="MenuItem" >Doctors</MenuItem>
                        <MenuItem onClick={handleClose} className="MenuItem" >Testimonial</MenuItem>
                        <MenuItem onClick={handleClose} className="MenuItem">Contact us</MenuItem>
                    </Menu>
                </div>
                <div className="latest-post">
                    <h2><div className="square"></div> LATEST POST</h2>
                    <div className="info">
                        <img src={Post1} alt="" />
                        <p>Normal distribution</p>

                    </div>
                    <div className="info">
                        <img src={Post2} alt="" />
                        <p>Normal distribution</p>
                    </div>
                </div>


                <div className="news">
                    <h2><div className="square"></div> NEWS</h2>
                    <div className="info">
                        <img src={Post3} alt="" />
                        <p>Normal distribution</p>
                    </div>
                    <div className="info">
                        <img src={Post4} alt="" />
                        <p>Normal distribution</p>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <p>@ 2023 All Rights Reserved By HTML Templates</p>
            </div>
        </div>
    )
}