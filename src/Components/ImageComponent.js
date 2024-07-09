import '../css/ImageComponent.css';
import { NewSliders } from '../Components/NewSliders.js';

export const ImageComponent = ({ image, name, text, secondText, style, season }) => {

    return (
        // <div className='farm-container' key={id ? id : ''}>
        <div className='farm-container'>
            <NewSliders images={image} name={name} />
            {/* <NewSliders id={id ? id : ''} images={image} name={name} /> */}
            <div className={'text farm-text'} style={style}>
                <p> {text}</p>
                <p>{secondText}
                    {season ? <span className='opening-time'>{season}</span> : ''}</p>
            </div>
        </div>
    );
};