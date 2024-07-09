import { useState } from "react";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import '../css/EventDetails.css';

export const NewSliders = ({ images, name }) => {

    const [index, setIndex] = useState(0);

    const previos = () => {
        setIndex((index => {
            index--;
            if (index < 0) {
                return images.length - 1;
            }
            return index;
        }));
    };

    const next = () => {
        setIndex((index => {
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
            return index;
        }));
    };

    return (
        <div className="slider">

            {/* // <div className="slider" key={id}> */}
            <img className='farm-image' src={images[index]} alt={name} />
            {images.length > 1 && (
                <>
                    <button className="arrow-btn arrow-btn-left" onClick={previos}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                    </button>
                    <button className="arrow-btn arrow-btn-right" onClick={next}>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </button>
                </>
            )}
        </div>);

};