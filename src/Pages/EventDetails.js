import { useState } from 'react';
import { EventsData } from '../Data/EventsData.js';
import '../css/App.css';
import { useParams } from 'react-router-dom';
import { ImageComponent } from "../Components/ImageComponent";


export const DetailedPage = () => {
    const [events] = useState(EventsData);
    const { name } = useParams();

    return (
        <div className='container'>
            {events.filter((event) => event.name === name).map((event) => {
                const { id, name, description, image, season } = event;
                return (
                    <div key={id}>
                        <ImageComponent
                            image={image}
                            name={name}
                            text={description}
                            secondText={'We\'re waiting for you in: '} season={season} />
                    </div>
                );
            })}
        </div>
    );
};