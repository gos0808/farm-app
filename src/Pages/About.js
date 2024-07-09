import '../css/About.css';

export const About = () => {
    return (

        <div className={"container about-container"}>

            <iframe title='map' className='iframe'
                width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                disabledefaultui='true'
                src="https://www.google.com/maps/embed/v1/place?&zoom=6
    &q=52°01'31.5N 106°32'25.0 W">
            </iframe>
            <div className={'about-info'}>
                <h1>Hours of operation</h1>
                <p>Monday - Friday: 9:00 am - 5:00 pm</p>
                <p>Saturday - Sunday: 9:00 am - 9:00 pm</p>                         <p>Public Holidays: 9:00 am - 9:00 pm</p>

                <h1>Contact us</h1>
                <p>Email: contact@blue-sky-farm.com</p>
                <p>Phone: + 1(111)111-1111</p>
            </div>
        </div >

    );
};