import './App.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div >
      <header className="App-header">
      <Link to="home" smooth={true} duration={500} className="scroll-link">Home</Link>
      <Link to="ticket-booking" smooth={true} duration={500} className="scroll-link">Ticket Booking</Link>
      <Link to="visa-booking" smooth={true} duration={500} className="scroll-link">Visa Booking</Link>
      <Link to="hotel-booking" smooth={true} duration={500} className="scroll-link">Hotel Booking</Link>
      <Link to="travel-insurance" smooth={true} duration={500} className="scroll-link">Travel Insurance</Link>
      <Link to="contact" smooth={true} duration={500} className="scroll-link">Contact Us</Link>
    </header>
    </div>
  );
}

export default Header;