import './Home.css';
import '../../App.css';

import { useState } from 'react';
import { EventsData } from '../../Data/events.js';
import { useNavigate } from 'react-router-dom';
import { ImageComponent } from "../../Components/ImageComponent/ImageComponent";


export const Home = () => {

    const [events] = useState(EventsData);

    const navigate = useNavigate();

    const handleClick = (event) => {
        const name = event.target.name;
        navigate(`/details/${name}`, { state: { eventName: name } });
    };

    return (

        <div
            className='home-container' >

            <div className='events '>
                {events.map((event) => {
                    const { id, name, image } = event;
                    return (
                        <div key={id}>
                            <div className='image-container '>
                                <img
                                    className={'image-container event-image'}
                                    src={`../../images/${image[0]}.jpg`}
                                    name={name}
                                    alt={name}
                                    onClick={handleClick}
                                />
                            </div>

                            <h2 className='event-name'> {name}</h2>
                        </div>
                    );
                })}
            </div>
            <ImageComponent
                image={['main-image']}
                text={`Blue Sky Farm is a 100-acre, fifth-generation family-owned and operated farm located in the picturesque plains of Saskatchewan, renowned for its breathtaking "living skies." The expansive skies of Saskatchewan provide a stunning backdrop to our fields, offering a daily display of vibrant sunsets.
                
                We grow various vegetables, fruits, berries,  mushrooms and flowers, and sell our produce on the farm.`}
                homeTextColorStyle={'home-text-color'}
                homeTextBlock={'home-text-block'}
            />
        </div >
    );
};