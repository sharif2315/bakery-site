import React, { useState, useEffect } from 'react';

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

// import navLogo from '../assets/navLogo.png'
import navLogo from '../assets/bakes.png'

//'../assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [aColor, setaColor] = useState('#1f2937');

  // const logoUrl = 'https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/navLogo.png?raw=true'

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? ' w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-rose-300/70 max-w-[1440px]'
          : ' w-full h-20 z-[100] bg-rose-300/70 max-w-[1440px]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 pr-8'>
        <a href='/'>
            <img src={navLogo} alt='/' className='cursor-pointer w-14 rounded-full' />
        </a>
        <div>
          <ul style={{ color: `${aColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-md uppercase hover:border-b hover:font-semibold'>
              <a href='/'>Home</a>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b hover:font-semibold'>
              <a href='/#about'>About</a>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b hover:font-semibold'>
              <a href='/#skills'>Menu</a>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b hover:font-semibold'>
              <a href='/#projects'>Projects</a>
            </li>
            <li className='ml-10 text-md uppercase hover:border-b hover:font-semibold'>
              <a href='/#contact'>Contact</a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${aColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} className='hover:cursor-pointer' />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu - Mobile Navbar */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <a href='/'>   
                  <img src={navLogo} alt='/' className='w-28 rounded-full shadow-md' />
              </a>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Best Baker in Richmond!</p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <a href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </a>
              <a href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </a>
              <a href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </a>
              <a href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </a>
              <a href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </a>
              <a href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </a>
            </ul>

            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.aedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </a>
                <a href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>


        </div>

      </div>
      
    </div>
  );
};

export default Navbar;