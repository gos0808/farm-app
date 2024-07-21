import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { EventsData } from '../../Data/eventsData.js';
import { ImageComponent } from "../../Components/ImageComponent/ImageComponent";

import '../../App.css';

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
                            season={season}
                            eventStyle={'event-style'}
                        />
                    </div>
                );
            })}
        </div>
    );
};