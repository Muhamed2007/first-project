import "./our-doctors.scss";
import team1 from "../../assets/images/team1.jpg"
import team2 from "../../assets/images/team2.jpg"
import team3 from "../../assets/images/team3.jpg"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={team1} onDragStart={handleDragStart}  />,
    <img src={team2} onDragStart={handleDragStart}  />,
    <img src={team3} onDragStart={handleDragStart}  />,
];
export const OurDoctors = () => {

    return (
        <div className="our-doctors">
            <h1><span>OUR</span>DOCTORS</h1>
            <AliceCarousel
                autoPlay
                infinite
                disableDotsControls
                mouseTracking
                items={items}
                responsive={
                    {
                        0: {
                            items: 1,
                        },
                        480: {
                            items: 2,
                        },
                        1024: {
                            items: 3,
                            itemsFit: 'contain',
                        }
                    }
                }
                autoPlayInterval={2000} />
        </div>
    )
}