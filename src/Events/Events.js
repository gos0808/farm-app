import { useState } from 'react';
import { EventsData } from './EventsData.js';
import { NewSliders } from './NewSliders.js';
import '../css/Events.css';

export const Events = () => {
    const [events, setEvents] = useState(EventsData);

    return (
        <div className='container'>
            <h1>About events</h1>
            <div className='events'>
                {events.map((event) => {
                    const { id, name, description, image, season } = event;
                    return (
                        <div key={id}>
                            <h2> {name}</h2>
                            <p>{description}</p>
                            <p className='opening'>We're waiting for you in:<span className='opening-time'>{season}
                            </span></p>
                            <NewSliders images={image} name={name} />
                        </div>
                    );
                })}
            </div >
        </div >
    );
};