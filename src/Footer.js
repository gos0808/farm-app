import './css/Footer.css';
import { Container, Row, Col, NavLink } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className='footer-row'>
                    <Col >
                        <p className='footer-name'> Links</p>

                        <NavLink href="/" className='footer-link'>Home</NavLink>
                        <NavLink href="/products" className='footer-link'>Products</NavLink>
                        <NavLink href="/events" className='footer-link'>Events</NavLink>
                        <NavLink href="/about" className='footer-link'>About</NavLink>
                    </Col>
                    <Col className='footer-contact'>
                        <p className='footer-name'>Contact us</p>
                        <p>Address: 123 Main St, Saskatchewan, Canada</p>
                        <p>Email: email@blueskyfarm.com</p>
                        <p>Phone: + 1(111)111-1111</p>
                    </Col>
                    <Col className='footer-hours'>
                        <p className='footer-name'>Hours of Operation:</p>
                        <p>Monday - Friday: 9:00am - 5:00pm</p>
                        <p>Saturday - Sunday: 9:00am - 5:00pm</p>
                        <p>Public Holidays: 9:00am - 5:00pm</p>
                    </Col>

                </Row>
                <Row>
                    <p className='footer-bottom'>&#169;  2024 Blue Sky Farm</p>
                </Row>
            </Container>
        </footer >
    );
};





