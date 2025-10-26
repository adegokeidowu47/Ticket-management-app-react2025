import { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    // Handle login logic here
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-200 to-white relative overflow-hidden'>
      {/* Background clouds effect */}
      <div className='absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80'
          alt='clouds background'
          className='w-full h-full object-cover opacity-40'
        />
      </div>

      {/* Login Card */}
      <div className='relative z-10 w-full max-w-md bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8 text-center border border-white/40'>
        <div className='flex justify-center mb-4'>
          <div className='bg-gradient-to-r from-blue-800 to-sky-400 p-3 rounded-full text-white'>
            <LogIn size={50} />
          </div>
        </div>

        <h2 className='text-xl font-semibold text-gray-800 mb-2'>
          Sign in with email
        </h2>
        <p className='text-gray-500 mb-6 text-sm'>
          Make a new doc to bring your words, data, and teams together. For
          free.
        </p>

        <form className='space-y-4'>
          <div className='flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-3 py-2'>
            <Mail className='text-gray-400 mr-2' size={18} />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full bg-transparent outline-none text-gray-700'
            />
          </div>

          <div className='flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-3 py-2'>
            <Lock className='text-gray-400 mr-2' size={18} />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full bg-transparent outline-none text-gray-700'
            />
          </div>

          <div className='flex justify-end text-sm'>
            <a href='#' className='text-sky-600 hover:underline'>
              Forgot password?
            </a>
          </div>

          <button
            type='submit'
            onSubmit={handleSubmit}
            className='w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-medium transition'
          >
            Get Started
          </button>
        </form>

        <div className='flex items-center my-6'>
          <div className='flex-grow border-t border-gray-300'></div>
          <span className='mx-3 text-gray-400 text-sm'>or sign in with</span>
          <div className='flex-grow border-t border-gray-300'></div>
        </div>

        <div className='flex justify-center space-x-4'>
          <button className='p-3 border rounded-full hover:bg-gray-100 transition'>
            <img
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              alt='Google'
              className='w-5 h-5 cursor-pointer'
            />
          </button>
          <button className='p-3 border rounded-full hover:bg-gray-100 transition'>
            <img
              src='https://www.svgrepo.com/show/475647/facebook-color.svg'
              alt='Facebook'
              className='w-5 h-5 cursor-pointer'
            />
          </button>
          <button className='p-3 border rounded-full hover:bg-gray-100 transition'>
            <img
              src='https://www.svgrepo.com/show/303110/apple-black-logo.svg'
              alt='Apple'
              className='w-5 h-5 cursor-pointer'
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

//     // <div className='w-full h-[100vh] flex justify-center items-center bg-amber-400 '>
//   <form action='#' method='POST'>
//     <main className='w-[90%] h-auto mx-auto md:w-full md:h-auto bg-white p-20'>
//       <h2 className='text-2xl'>Contact Me</h2>
//       <div data-testid='test-contact-name'>
//         <label htmlFor='name'>Full Name:</label>
//         <input
//           type='text'
//           id='name'
//           name='name'
//           placeholder='Enter your name'
//           title='full name'
//         />
//       </div>
//       <div data-testid='test-contact-email'>
//         <label htmlFor='email'>Email:</label>
//         <input
//           type='email'
//           id='email'
//           name='email'
//           placeholder='Enter your email'
//           title='email'
//         />
//       </div>
//       <div data-testid='test-contact-subject'>
//         <label htmlFor='subject'>Subject:</label>
//         <input
//           type='subject'
//           id='subject'
//           name='subject'
//           placeholder='Enter your subject'
//           title='subject'
//         />
//       </div>
//       <div data-testid='test-contact-message'>
//         <label htmlFor='message'>Message:</label>
//         <textarea
//           id='message'
//           name='message'
//           placeholder='Enter your message'
//           title='message-content'
//           minlength='10'
//         ></textarea>
//       </div>
//       <div
//         className='warningmsg'
//         data-testid='test-contact-error-emai'
//       ></div>
//       <button
//         type='submit'
//         title='submit button'
//         data-testid='test-contact-submit'
//       >
//         Send Message
//       </button>
//     </main>
//   </form>
// </div
