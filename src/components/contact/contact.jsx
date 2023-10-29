import "./contact.scss"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ContactImg from "../../assets/images/contact-img.jpg"
import { Button } from "@mui/material";
export const Contact = () => {
    return (
        <div className="Contact">
            <div className="text-cont">
                <h1>GET IN TOUCH</h1>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { margin: '5px 0px', width: '100ch' },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <div className="text-fields">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Full Name"
                            multiline
                            maxRows={4}
                        />
                        <br />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Email"
                            multiline
                            maxRows={4}
                        />
                        <br />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Phone Number"
                            multiline
                            maxRows={4}
                        />
                        <br />

                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                        />
                    </div>



                </Box>
                <Button>SEND</Button>
            </div>
            <div className="image">
                <img src={ContactImg} alt="" />
            </div>
        </div>
    )
}