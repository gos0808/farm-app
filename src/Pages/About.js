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
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4662380.544713574!2d-112.61613193397227!3d54.650971854163636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDAxJzMxLjUiTiAxMDbCsDMyJzI1LjAiVw!5e0!3m2!1sen!2sca!4v1720557940975!5m2!1sen!2sca">
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