import React from 'react';
import imge1 from '../../../assests/logo.png';

function Footer() {
  return (
    <div className='footer bottom-auto' className='Footer'>
      <div className='flex flex-wrap justify-center bg-gray-200 p-6'>
        <div className='flex flex-wrap mb-4 w-full'>
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/6 '>
        <h2 className='text-md py-4'> <img
                        alt="..."
                        src={imge1}
                        className="max-w-full mx-auto"
                        style={{ Width: "150px" ,height:"150px"}}
                      /></h2></div>

          <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 '>
                       
            <p className='text-sm text-indigo-900 py-6 text-justify'>
              {' '}
              NoQueue is an application designed focusing on medical centers to
              provide an easy to use solution to avoid unnecessary exposure to
              crowds in waiting rooms. We are providing you an effective and convenient way to channel and reach your doctor just on time.
            </p>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 md:pl-32'>
            <h3 className=' text-md py-3 text-red-700 '>COMPANY</h3>
            <ul className='text-xs font-sans'>
              <li className='py-1'>
                <a className='hover:text-red-500 text-indigo-900' href='index'>
                  Home
                </a>
              </li>
              <li className='py-1'>
                <a className='hover:text-red-500 text-indigo-900' href='about'>
                About us
                </a>
              </li>
              <li className='py-1'>
                <a className='hover:text-red-500 text-indigo-900' href='contactus'>
                Contact us
                </a>
              </li>
              <li className='py-1'>
                <a className='hover:text-red-500 text-indigo-900' href='services'>
                  Services
                </a>
              </li>
            
            </ul>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/6 '>
            <h3 className='text-md py-3 text-red-700'>RESOURCES</h3>
            <ul className='text-xs font-sans'>
              <li className='py-1'>
                <a className='hover:text-red-500 text-indigo-900' href='signup'>
                  Creat your account
                </a>
              </li>
              <li className='py-1'>
                <a className='hover:text-red-500 text-indigo-900' href='signin'>
                Login to your account
                </a>
              </li>
              <li className='py-1'>
                <a className='hover:text-red-500 text-indigo-900' href='business/signup'>
                  Register your business
                </a>
              </li>
              <li className='py-1'>
                <a className='hover:text-red-500 text-indigo-900' href='map'>
                  Map
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/6'>
            <h3 className='text-md py-3 text-red-700'>FOLLOW US</h3>
            <form action='#'>
              <div className='mb-4'>
              <button
                            className="hover:text-red-500 bg-white text-blue-600 w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>
              </div>
             
                          <button
                            className="hover:text-red-500 bg-white text-blue-600 w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-instagram"></i>
                          </button>
            </form>
          </div>
        </div>
      </div>

      <div className='bg-blue-700 p-1 pl-6'>
        <p className='bottom text-xs '>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='index' className='hover:text-white text-black'>
            NoQueue
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
