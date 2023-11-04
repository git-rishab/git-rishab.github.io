import React, { useEffect, useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import AOS from 'aos';

import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import "../style/hamburger.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navMenu?.classList.add('shadow-md');
    } else {
      navMenu?.classList.remove('shadow-md');
    }
  });

  const toggleMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    if (sidebar) {
      navMenu.style.backdropFilter = "blur(8px)";
    } else {
      navMenu.style.backdropFilter = "none";
    }
    document.body.classList.toggle("open");
    setSidebar(!sidebar);
  };

  const handleSetActive = (title) => {
    setActive(title);
  };

  const linkClicked = (link) => {
    const currentURL = location.pathname;
    setActive(link.title);
    if (currentURL != "/") {
      navigate(`/`)
      setTimeout(() => {
        scroller.scrollTo(link.id, {
          smooth: true,
          offset: 0,
          duration: 50,
        });
      }, 100);
    }
  }

  // const capitalizeFirstLetter = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  // }

  useEffect(() => {
    // setTimeout(() => {
    // let section = document.querySelectorAll("section");
    // window.onscroll = () => {
    //   section.forEach((sec) => {
    //     let top = window.scrollY;
    //     let offset = sec.offsetTop;
    //     let height = sec.offsetHeight;
    //     let id = sec.id;
    //     let capitalizedString = capitalizeFirstLetter(id)
    //     if (top >= offset && top < offset + height) {
    //       setActive(capitalizedString);
    //     }
    //   });
    // };
    // }, 100);

    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in',
    });
  }, []);

  return (
    <nav id='nav-menu' className={`px-6 lg:px-12 xl:px-14 bg-[#F6F6F6] w-full flex items-center p-4 lg:py-5 fixed top-0 z-10 duration-300 shadow-md`}>
      <div className='w-full flex flex-row-reverse lg:flex-row justify-between items-center max-w-full mx-auto'>
        < Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <RouterLink to="/" className='flex items-center gap-2 cursor-pointer'>
            <img src={logo} alt="logo" className='w-12 h-12 object-contain' />
            <p className='text-black-200 text-[18px] font-bold flex' >
              Rishab
            </p>
          </RouterLink>
        </ Link>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-black-200" : "text-secondary"} hover:text-black-100 text-[18px] font-medium cursor-pointer`}
            // onClick={() => setActive(link.title)}
            >
              {/* <a href={`#${link.id}`}> */}
              <Link
                activeClass="active"
                to={link.id}
                spy={true}
                smooth={true}
                offset={0}
                duration={50}
                onSetActive={() => handleSetActive(link.title)}
                onClick={() => linkClicked(link)}
              >
                {link.title}
              </Link>
              {/* </a> */}
            </li>
          ))}
          <li
            className={`text-black-200 hover:text-black-100 text-[18px] font-medium cursor-pointer`}
          >
            <a href="https://drive.google.com/file/d/1de4WfBY1Bow8uiCPerYC8ZR1zCYwfCm0/view?usp=sharing" target='_blank'>
              Resume
            </a>
          </li>
        </ul>
        <div id="ham" className='lg:hidden'>
          <button className="burger" onClick={toggleMenu}></button>
          <div className="background"></div>
          <div className="menu h-full">
            <nav>
              <div data-aos="fade-left" className='flex min-w-full justify-start flex-col gap-8'>
                {navLinks.map((link, index) => (
                  <div
                    // data-aos="fade-left"
                    // data-aos-delay={(index + 1) * 400}
                    key={link.id} className={`${active === link.title ? "text-white" : "text-white"} ml-10 font-poppins text-[24px] font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle)
                      toggleMenu()
                      setActive(link.title)
                    }}
                  >
                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>
                  </div>
                ))}
                <div
                  className={`text-white ml-10 font-poppins text-[24px] font-medium cursor-pointer`}>
                  <a href="https://drive.google.com/drive/folders/1tX79vNXfvP1BQrjQjbjvkWvfFu0ZVMrR?usp=share_link" target='_blank'>
                    Resume
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div >
    </nav >
  )
}

export default Navbar;

















{/* <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
    <ul className='list-none flex justify-end items-start flex-col gap-4'>
    {navLinks.map((link) => (
      <li
          key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer`}
          onClick={() => {
            setToggle(!toggle)
            setActive(link.title)
          }}
        >
        <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  </div> */}

















{/* <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 pt-20 fixed top-[76px] right-0 min-w-full min-h-screen z-30 bg-primary bg-opacity-80 backdrop-blur-lg`}>
            <ul className='flex min-w-full justify-start flex-col gap-8'>
              {navLinks.map((link) => (
                <li
                  key={link.id} className={`${active === link.title ? "text-white" : "text-white"} ml-10 font-poppins text-[24px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
              <li
                className={`text-white ml-10 font-poppins text-[24px] font-medium cursor-pointer`}>
                <a href="https://drive.google.com/file/d/1yNKvxNJ2Ro7f-neOhRP_k-E90ePauKry/view?usp=share_link" target='_blank'>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div> */}