import "./about-hospital.scss"
import { Button } from "@mui/material";
import About from "../../assets/images/about-img.jpg"
export const AboutHospital = () => {
    return (
        <div className="AboutHospital">
            <div className="left">
                <img src={About} alt="" />
            </div>
            <div className="right">
                <h1><span>About</span> Hospital</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum cumque maiores distinctio, odit quis rerum optio suscipit neque. Laudantium iure natus optio, distinctio facere ea sint voluptatem asperiores molestias aliquid similique excepturi iste quidem rerum amet itaque. Totam dolores harum ab laudantium, suscipit, quidem rerum, commodi deleniti accusamus dolorem earum.</p>
                <Button>Read More</Button>
            </div>
        </div>
    )
}