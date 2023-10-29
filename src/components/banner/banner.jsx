import "./banner.scss";
import { Button } from "@mui/material";
import SliderImg from "../../assets/images/slider-img.jpg"
const Banner = () => {
    return (
        <div className="banner">
            <div className="left">

                <h1>MICO</h1>
                <h1 className="green">HOSPITAL</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam eligendi asperiores, dolore consequatur laudantium pariatur vel illum sint non?
                </p>
                <Button className="btn-login" variant="text">
                    Contact Us
                </Button>
            </div>
            <div className="right"><img src={SliderImg} alt="SliderImg" /></div>
        </div>
    )
}

export default Banner