import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowAltCircleRight } from 'react-icons/fa';

const HamberMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        ref={buttonRef}
        className='right-5 top-5 text-3xl cursor-pointer text-white flex md:hidden'
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu */}
      {isOpen && (
        <div
          id='close'
          ref={menuRef}
          className='flex flex-col items-center justify-center space-y-10 text-[18px] py-10 px-8 text-3xl md:bg-none md:hidden absolute w-[90%] h-auto top-30 right-6 backdrop-blur-md bg-black/30 border border-white/20 rounded-xl shadow-lg p-2'
        >
          <NavLink
            to='/'
            className='text-white hover:text-amber-200'
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to='/destination'
            className='text-white hover:text-amber-200'
            onClick={() => setIsOpen(false)}
          >
            About us
          </NavLink>
          <NavLink
            to='/crew'
            className='text-white hover:text-amber-200'
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to='/login'
            className='text-white hover:text-amber-200'
            onClick={() => setIsOpen(false)}
          >
            Sign In
            <FaArrowAltCircleRight className='inline ml-2' />
          </NavLink>
        </div>
      )}
    </>
  );
};

export default HamberMenu;
