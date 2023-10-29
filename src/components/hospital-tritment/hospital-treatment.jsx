import "./hospital-treatment.scss"
import T1 from "../../assets/images/t1.png"
import T2 from "../../assets/images/t2.png"
import T3 from "../../assets/images/t3.png"
import T4 from "../../assets/images/t4.png"
import { Button } from "@mui/material";

export const HospitalTreatment = () => {
    return (
        <div className="hospital-treatment">
            <h1><span>Hospital</span> Treatment</h1>
            <div className="cards">
                <div className="card">
                    <img src={T1} alt="" />
                    <h2>Nephrolist Care</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis, pariatur amet nemo neque culpa deleniti enim suscipit minus sint.</p>
                    <Button>READ MORE</Button>
                </div>
                <div className="card">
                    <img src={T2} alt="" />
                    <h2>Eye Care</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis, pariatur amet nemo neque culpa deleniti enim suscipit minus sint.</p>
                    <Button>READ MORE</Button>
                </div>
                <div className="card">
                    <img src={T3} alt="" />
                    <h2>Pediatrician Care</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis, pariatur amet nemo neque culpa deleniti enim suscipit minus sint.</p>
                    <Button>READ MORE</Button>
                </div>
                <div className="card">
                    <img src={T4} alt="" />
                    <h2>Parental Care</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis, pariatur amet nemo neque culpa deleniti enim suscipit minus sint.</p>
                    <Button>READ MORE</Button>
                </div>
            </div>
        </div>
    )
}