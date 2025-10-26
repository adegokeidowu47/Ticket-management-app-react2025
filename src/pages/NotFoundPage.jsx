import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
      //Redirecting in 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className='w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-blue-600'>
      <FaExclamationTriangle className='text-yellow-400 text-5xl md:text-6xl lg:text-7xl mb-6' />
      <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
        404 Not Found
      </h1>
      <p className='text-white text-base sm:text-lg md:text-xl mb-6'>
        This page does not exist!
        <span className='block text-[15px] mt-1'>
          Redirecting in 3 seconds....
        </span>
      </p>
      <p></p>

      {/* Button */}
      <button
        onClick={() => navigate(-1)}
        className='inline-block text-black text-base sm:text-lg md:text-xl bg-yellow-400 rounded-full px-12 sm:px-10 py-3 sm:py-4 transition-all'
      >
        <FaArrowLeft className='inline mr-2 text-xl' />
        Go Back
      </button>
    </section>
  );
};

export default NotFoundPage;
