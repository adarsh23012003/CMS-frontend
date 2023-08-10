import React from "react";

function Footer() {
  return (
    <>
      <footer className='text-gray-600'>
        <div className='border-t border-gray-200'>
          <div className='container px-5 py-8 items-center'>
            <div className='flex justify-center'>
              <div className='relative sm:w-64 w-40 sm:mr-4 mr-2'>
                <input
                  placeholder='Enter your email'
                  type='text'
                  id='footer-field'
                  name='footer-field'
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className='bg-gray-100'>
          <p className='justify-center flex text-gray-500 text-sm sm:text-left py-4 px-5'>
            © 2022 Copyright —
            <a
              href='https://inflection.org.in/'
              className='text-gray-600 ml-1 underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              @Inflection org
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
