// Header.js
import React from 'react';
import './header.css';
import Toogle from './Toogle';
import { Link } from 'react-scroll';



function Header() {

  return (
    <>
      <div className='wrap'>
        <div className='left-bar ms-5'>
          <div className='myname'>Devika</div>
          <Toogle />
        </div>
        <div className='right-bar'>
          <div className='list mt-3'>
            <ul>
              <Link
                activeClass="active"
                to='Home'
                spy={true}
                smooth={true}
              >
                <li>Home</li>
              </Link>
              <Link
                to='Services'
                spy={true}
                smooth={true}
              >
                <li>Skills</li>
              </Link>
              <Link
                to='Work'
                spy={true}
                smooth={true}
              >
                <li>Experience</li>
              </Link>
              <Link

                to='Portfolio'
                spy={true}
                smooth={true}
              >
                <li>Portfolio</li>
              </Link>
            </ul>
          </div>
          <Link
                to='Contact'
                spy={true}
                smooth={true}
              >
          <button className='button me-5'>
            Contact
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
