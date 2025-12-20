import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoWhite } from '../assets'; // SVG Logo
import { LogoDark } from '../assets'; // SVG Logo


const Header = () => {

  const { resetRoomFilterData } = useRoomContext();

  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 50
        ? setHeader(true)
        : setHeader(false)
    );
  });

  const navLinks = ['Home', 'Rooms', 'Restaurant', 'Spa', 'Contact'];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >

      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>

        {/* Logo */}
        <Link to="/" onClick={resetRoomFilterData} className="group">
          <h1 className={`text-2xl lg:text-3xl font-bold tracking-wider transition-all duration-300 ${
            header 
              ? 'text-primary' 
              : 'text-white'
          }`}>
            <span className="font-serif italic">De Jays</span>
            <span className="font-light ml-2">Guest Inn</span>
          </h1>
        </Link>

        {/* Nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
  <Link to="/" className='transition hover:text-accent'>Home</Link>
  <Link to="/about" className='transition hover:text-accent'>About</Link>
  <Link to="/" className='transition hover:text-accent'>Rooms</Link>
  <Link to="/restaurant" className='transition hover:text-accent'>Restaurant</Link>
  <Link to="/contact" className='transition hover:text-accent'>Contact</Link>
</nav>

      </div>

    </header>
  );
};

export default Header;
