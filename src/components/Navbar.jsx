import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import HamberMenu from './HamberMenu';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex items-center md:mr-4 mr-auto' to='/'>
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
              <span className='md:block text-white text-xl md:text-2xl font-bold ml-2'>
                Ticket App
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='hidden space-x-2 md:flex'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/jobs' className={linkClass}>
                  About
                </NavLink>
                <NavLink to='/add-job' className={linkClass}>
                  Contact Us
                </NavLink>
                <NavLink to='/login' className={linkClass}>
                  Sign In
                  <FaArrowAltCircleRight className='inline ml-2' />
                </NavLink>
              </div>
              <HamberMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
