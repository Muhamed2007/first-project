import "./book-appointment.scss";
import { Button } from "@mui/material";
import SliderImg from "../../assets/images/slider-img.jpg"
const BookAppointment = () => {
    return (
        <div className="book-appointment">
            <h1><b>BOOK</b> APPOINTMENT</h1>
            <div className="linear"></div>
            <div className="inputs">
                <div className="top">
                    <div className="input">
                        <p>Patient Name</p>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <p>Doctor's Name</p>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <p>Departament's Name</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="buttom">
                    <div className="input">
                        <p>Phone Number</p>
                        <input type="number" />
                    </div>
                    <div className="input">
                        <p>Symtoms</p>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <p>Choose Date</p>
                        <input type="date" />
                    </div>

                </div>

            </div>
            <Button className="btn-login" variant="text">
                SUBMIT NOW
            </Button>
        </div>

    )
}

export default BookAppointment