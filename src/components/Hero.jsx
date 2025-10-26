import { NavLink } from 'react-router-dom';
import HeroImg from '../assets/images/green-raffle-tickets.png';

const Hero = () => {
  return (
    <section className='w-full h-auto  md:h-screen bg-blue-600 text-white py-10 md:py-0 flex flex-col md:flex-row gap-5 md:justify-center text-center md:text-start md:items-center'>
      <div className='w-[90%] h-[90%] mx-auto md:w-[40%]  px-4 flex flex-col gap-8 md:mt-40'>
        <h1 className='text-3xl lg:text-7xl font-bold mb-4'>
          Welcome to Ticket Management App
        </h1>
        <p className='text-xl lg:text-2xl mb-8'>
          Streamline your ticketing process with ease and efficiency.
        </p>
        <NavLink
          to='/add-ticket'
          className='lg:w-[50%] lg:h-[10%] flex justify-center items-center bg-white text-blue-600 text-[15px] px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 font-bold lg:text-xl lg:px-8 lg:py-3'
        >
          Create a Ticket
        </NavLink>
      </div>
      <div className='md:w-[40%] h-auto mx-auto'>
        <img
          src={HeroImg}
          alt='Ticket Images'
          className='w-[90%] mx-auto md:w-full bg-white py-10 md:py-20 rounded-2xl'
        />
      </div>
    </section>
  );
};

export default Hero;
